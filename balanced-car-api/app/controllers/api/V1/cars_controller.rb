class Api::V1::CarsController < ApplicationController

  def show
    @car = Car.find_by_id(params[:id])
    check_publicity(@car)
    if @car.for_bidding == false
    render json: @car, :except=> [:public, :for_bidding, :last_bid, :buy_limit, :commercial, :revenues, :chassis_number]
    else
      render json: @car, :except=> [:public, :commercial, :chassis_number, :revenues]
    end
  end

end

private

def check_publicity(car)
  
  if car == nil || car.public == false
    raise ActiveRecord::RecordNotDestroyed, 'It is not a public car or not found'
    else
      return if car.public == true
  end

  
end