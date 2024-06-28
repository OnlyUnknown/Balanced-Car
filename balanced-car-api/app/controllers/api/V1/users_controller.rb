class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: %i[create_item index update_car
                                                          delete_car switch_publicity update_driver]
  def index
    @cars = User.includes(:cars).find_by_id(current_devise_api_token.resource_owner)
    render json: @cars.cars
  end

  def show
    @car = Car.find_by_id(params[:id])
    check_user(@car.user)
    render json: @car
  end

  def switch_publicity
    @car = Car.find_by_id(params[:id])
    check_user(@car.user)
    if @car
      new_public_status = !@car.public
      if @car.update(public: new_public_status)
        render json: @car.public
      else
        render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Car not found' }, status: :not_found
    end
  end

  def update_car
    @car = Car.find(params[:id])
    check_user(@car.user)
    if @car.update(caru_params)
      render json: { message: 'car updated successfully' }
    else
      render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create_item
    current_devise_api_token.resource_owner
    resource = params[:resource].capitalize.constantize
    param = if resource == Car
              car_params
            else
              driver_params
            end
    @item = resource.new(param)
    if @item.save
      render json: @item
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def delete_resource
    resource = params[:resource].capitalize.constantize.find(params[:id])
    check_user(resource.user)
    check_driver(resource.driver) if resource.instance_of?(Car)
    if resource.delete
      render json: { resource:, message: "#{resource.class.name} #{resource.id} Deleted successfully" }
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def car_params
    params.require(:car).permit(
      :name,
      :tires_age,
      :oil,
      :note,
      :model,
      :car_type,
      :transmission_type,
      :for_bidding,
      :last_bid,
      :buy_limit,
      :commercial,
      :public,
      :chassis_number,
      :driver
    ).merge(
      user: current_devise_api_token.resource_owner
    )
  end
end

def driver_params
  params.require(:driver).permit(
    :name,
    :identification,
    :phone_number,
    :nationality,
    :car
  ).merge(
    user: current_devise_api_token.resource_owner
  )
end

def check_user(user)
  return if user == current_devise_api_token.resource_owner

  raise ActiveRecord::RecordNotDestroyed, 'You are not authorized'
end

def check_driver(driver)
  return if driver.nil?

  raise ActiveRecord::RecordNotDestroyed, 'You need to remove the or change the driver first'
end

def caru_params
  params.require(:car).permit(
    :name,
    :tires_age,
    :oil,
    :note,
    :model,
    :car_type,
    :transmission_type,
    :for_bidding,
    :last_bid,
    :buy_limit,
    :commercial,
    :public,
    :chassis_number,
    :driver
  ).merge(
    user: current_devise_api_token.resource_owner
  )
end
