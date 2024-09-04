class Api::V1::RevenuesController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!,
                only: %i[index_revenues show_revenue
                         index_car_revenues ]

  def index_revenues
    @revenues = User.includes(:revenues).find_by_id(current_devise_api_token.resource_owner)
    render json: @revenues.revenues
  end

  def show_revenue
    @revenue = Revenue.find_by_id(params[:id])
    check_user(@revenue.user)
    render json: @revenue
  end

  def index_car_revenues
    user_id = current_devise_api_token.resource_owner.id
    car_id = params[:id]

    @revenues = Revenue.joins(:car).where(cars: { id: car_id, user_id: })
    render json: @revenues
  end
end
