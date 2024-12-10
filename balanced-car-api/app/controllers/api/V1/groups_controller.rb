class Api::V1::GroupsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!,
  only: %i[create_group index update_item
           delete_car switch_publicity
           update_driver profile update_profile]

  def index
    @groups = Group.where(user: current_user)
    render json: @groups
  end
  
  def create_group
    @group = Group.new(group_params)
    @group.user = current_user
    if @group.save
      render json: @group
    else
      render json: { errors: @group.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def add
  end

  def remove
  end

  def show
  end

  def update_group
    @group = Group.find_by_id(params[:id])
    check_user(@group.user)
    if @group
      if @group.update(group_params)
        render json: @group
      else
        render json: { errors: @group.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Group not found' }, status: :not_found
    end
  end


  def switch_publicity
    @group = Group.find_by_id(params[:id])
    check_user(@group.user)
    if @group
      new_public_status = !@group.public
      if @group.update(public: new_public_status)
        render json: @group.public
      else
        render json: { errors: @group.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Group not found' }, status: :not_found
    end
  end

  private

  

end
