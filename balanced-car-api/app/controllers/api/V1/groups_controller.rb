class Api::V1::GroupsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!,
  only: %i[create_item index update_item
           delete_car switch_publicity
           update_driver profile update_profile]

  def create_item
    current_devise_api_token.resource_owner
    resource = params[:resource].capitalize.constantize
    param = if resource == Car
              car_params
            elsif resource == Driver
              driver_params
            elsif resource == Bill
              bill_params
            elsif resource == Revenue
              revenue_params
            end
    @item = resource.new(param)
    if @item.save
      render json: @item
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def add
  end

  def remove
  end

  def show
  end

  def publicity
  end

  private

end
