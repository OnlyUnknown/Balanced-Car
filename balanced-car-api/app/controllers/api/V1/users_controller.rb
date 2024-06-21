class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: [:create, :index, :update_car, :delete_car]
  def index
    @cars = User.includes(:cars).find_by_id( current_devise_api_token.resource_owner)
    render json: @cars.cars
   end

  def show
  @car = Car.find_by_id(params[:id])
  render json: @car
  end

  def switch_publicity
    @car = Car.find_by_id(params[:id])
    if @car.public == true && @car.update(public: false)
    render json: @car.public
    elsif @car.update(public: true)
    render json: @car.public
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

  def create
    @car = Car.new(car_params)
    c_user = current_devise_api_token.resource_owner
    if @car.save
      render json: @car
    else
      render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
    end
    end

  def delete_car
    @car = Car.find(params[:id])
    check_user(@car.user)
    if @car.delete
      
      render json: {car:@car, message: "#{@car.id} Deleted successfully" }
    else
      render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
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
      :chassis_number
    ).merge(
      user: current_devise_api_token.resource_owner
    )
    
  end
end

def check_user(user)
  return if user == current_devise_api_token.resource_owner

  raise ActiveRecord::RecordNotDestroyed, "You are not authorized"
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
    :chassis_number
  ).merge(
    user: current_devise_api_token.resource_owner
  )
  
end
