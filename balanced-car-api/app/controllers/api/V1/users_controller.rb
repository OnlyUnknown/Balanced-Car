class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!, only: [:create, :index]
  def index
    @cars = User.includes(:cars).where(id: current_devise_api_token.resource_owner)
    render json: @cars, include: :cars
   end

  def show
  @car = Car.find_by_id(params[:id])
  render json: @car
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

  def destroy; end

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
