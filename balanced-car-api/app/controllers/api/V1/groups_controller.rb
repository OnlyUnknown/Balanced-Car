class Api::V1::GroupsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!,
  only: %i[create_group index update_item
           delete_car switch_publicity
           update_driver profile update_profile]

  def index
    @groups = Group.where(user: current_devise_api_token.resource_owner)
    render json: @groups
  end

  def create_group
    @group = Group.new(group_params)
    if @group.save
      render json: @group
    else
      render json: { errors: @group.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def add_item_to_group
    @group = Group.find(params[:group_id])
    check_user(@group.user)
    @item = params[:item_type].classify.constantize.find_by_id(params[:item_id])
    unless @item
      render json: { error: "#{params[:item_type].capitalize} not found or group type mismatch" }, status: :unprocessable_entity and return
    end

    if @item.user != current_devise_api_token.resource_owner
      render json: { error: "You are not the owner of this #{params[:item_type]}" }, status: :forbidden and return
    end

    if @item
      group_item = GroupItem.create(group: @group, item: @item, user: current_devise_api_token.resource_owner)
      if group_item.persisted?
        render json: @group
      else
        render json: { errors: group_item.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "#{item_type.capitalize} not found" }, status: :not_found
    end
  end


  def remove
  end

  def show_items
    @group = Group.find(params[:id])
    check_user(@group.user)
    if @group
      case @group.group_type
      when 'cars'
        @items = @group.cars
      when 'drivers'
        @items = @group.drivers
      else
        @items = []
      end
      render json: @items
    else
      render json: { error: 'Group not found' }, status: :not_found
    end
  end

  def update_group
    @group = Group.find(params[:id])
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

  def find_item_by_type(item_type, item_id, group_type = nil)
    if group_type && item_type != group_type
      return nil
    end

    case item_type
    when 'car'
      Car.find_by_id(item_id)
    when 'driver'
      Driver.find_by_id(item_id)
    else
      nil
    end
  end

  def group_params
    params.require(:group).permit(:name, :description, :public, :group_type).merge(user: current_devise_api_token.resource_owner)
  end

end
