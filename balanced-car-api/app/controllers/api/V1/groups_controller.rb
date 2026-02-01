class Api::V1::GroupsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!,
                only: %i[create_group index add_item_to_group remove_from_group
                         delete_group show_items update_group switch_publicity
                         add_item_to_group remove_from_group]

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
    @item = find_item(params[:item_type], params[:item_id])
    return unless @item

    if GroupItem.exists?(group: @group, item: @item)
      render json: { error: "#{params[:item_type].capitalize} is already in the group" },
             status: :unprocessable_entity and return
    end

    add_item_to_group_transaction
  end

  def delete_group
    @group = Group.find(params[:id])
    check_user(@group.user)
    if @group
      @group.destroy
      render json: { message: 'Group deleted successfully' }
    else
      render json: { error: 'Group not found' }, status: :not_found
    end
  end

  def switch_items_publicity(group)
    group.items.each do |item|
      item.update(public: true) unless item.public
    end
  end

  def remove_from_group
    @group = Group.find(params[:group_id])
    check_user(@group.user)
    @item = params[:item_type].classify.constantize.find_by_id(params[:item_id])
    unless @item
      render json: { error: "#{params[:item_type].capitalize} not found or group type mismatch" },
             status: :unprocessable_entity and return
    end

    group_item = GroupItem.find_by(group: @group, item: @item)
    if group_item
      group_item.destroy
      render json: { message: "#{params[:item_type].capitalize} removed from group successfully" }
    else
      render json: { error: "#{params[:item_type].capitalize} not found in group" }, status: :not_found
    end
  end

  def show_items
    @group = Group.find_by_id(params[:id])
    if @group
      check_user(@group.user)
      @items = @group.cars
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

  def find_item(item_type, item_id)
    item = item_type.classify.constantize.find_by_id(item_id)
    unless item
      render json: { error: "#{item_type.capitalize} not found or group type mismatch" },
             status: :unprocessable_entity and return
    end

    if item.user != current_devise_api_token.resource_owner
      render json: { error: "You are not the owner of this #{item_type}" }, status: :forbidden and return
    end

    item
  end

  def add_item_to_group_transaction
    group_item = nil
    GroupItem.transaction do
      @item.update!(public: @group.public) unless @item.is_a?(Driver)
      group_item = GroupItem.create!(group: @group, item: @item, user: current_devise_api_token.resource_owner)
    end
    if group_item.persisted?
      render json: @group
    else
      render json: { errors: group_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def group_params
    params.require(:item).permit(:name, :description, :public, :group_type
                      ).merge(user: current_devise_api_token.resource_owner)
  end
end
