class Api::V1::CarsController < ApplicationController
  def index; end

  def show
    @car = Car.find_by_id(params[:id])
    check_publicity(@car.public)
    if @car.for_bidding == false
    render json: @car, :except=> [:public, :for_bidding, :last_bid, :buy_limit, :commercial, :revenues, :chassis_number]
    else
      render json: @car, :except=> [:public, :commercial, :chassis_number, :revenues]
    end
  end


  def create; end

  def destroy; end
end

private

def check_publicity(car)
  return if car == true

  raise ActiveRecord::RecordNotDestroyed, 'It is not a public car or car not found found'
end