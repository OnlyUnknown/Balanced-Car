class Api::V1::UsersController < ApplicationController
  before_action :authinticate_user!
  def index; end

  def show; end

  def create
    @car = Car.new(car_params)
    if @car.save
      render json: @car
    else
      render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
    end
    end

  def destroy; end

  private

  def car_params
    current_user
    name = name_i
    tires_age = tires_i
    oil = oil_i
    note = note_i
    model = model_i
    car_type = car_type_i
    transmission_type = transmission_type_input
    for_bidding = for_bidding_i
    last_bid = last_bid_i
    buy_limit = buy_limit_i
    commercial = commercial_i
    publicity = public_i
    chassis_number = chassis_number_i

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
      user: current_user,
    )
    
  end
end
