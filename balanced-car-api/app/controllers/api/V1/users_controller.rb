class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token!,
                only: %i[create_item index update_item
                         delete_car switch_publicity
                         update_driver profile update_profile
                         delete_resource]
  @error = nil
  def index_cars
    @cars = Car.joins(:user).where(users: { id: current_devise_api_token.resource_owner })
    render json: @cars, except: %i[revenues bills drivers user]
  end

  def index_drivers
    @drivers = User.includes(:drivers).find_by_id(current_devise_api_token.resource_owner)
    render json: @drivers.drivers
  end

  def index_bills
    @bills = User.includes(:bills).find_by_id(current_devise_api_token.resource_owner)
    render json: @bills.bills
  end

  def index_car_bills
    user_id = current_devise_api_token.resource_owner.id
    car_id = params[:id]

    @bills = Bill.joins(:car).where(cars: { id: car_id, user_id: })
    render json: @bills
  end

  def show_car
    @car = Car.find_by_id(params[:id])
    check_user(@car.user)
    render json: @car
  end

  def show_driver
    @driver = Driver.find_by_id(params[:id])
    check_user(@driver.user)
    render json: @driver
  end

  def show_bill
    @bill = Bill.find_by_id(params[:id])
    check_user(@bill.user)
    render json: @bill
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

  def profile
    current_devise_api_token.resource_owner
    @profile = User.find_by_id(current_devise_api_token.resource_owner_id)
    render json: @profile, except: %i[cars]
  end

  def update_profile
    current_devise_api_token.resource_owner
    @profile = User.find_by_id(current_devise_api_token.resource_owner_id)
    if @profile.update(useru_params)
      render json: { item: @profile, message: "#{@profile.class.name} #{@profile.id} updated successfully" }
    else
      render json: { errors: @profile.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update_item
    current_devise_api_token.resource_owner
    resource = params[:resource].capitalize.constantize
    param = if resource == Car
              caru_params
            elsif resource == Driver
              driveru_params
            elsif resource == Bill
              billu_params
            elsif resource == Revenue
              revenueu_params
            end
    @item = resource.find_by_id(params[:id])
    check_user(@item.user)
    if @item.update(param)
      render json: { item: @item, message: "#{@item.class.name} #{@item.id} updated successfully" }
    else
      render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
    end
  end

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
      render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def delete_resource
    @resource = params[:resource].capitalize.constantize.find_by_id(params[:id])
    check_user(@resource.user)
    # ... existing code to find resource ...

    @resource.transaction do
      # Handle drivers by setting car_id to nil
      if @resource.instance_of?(Car)
        @resource.driver.update(car_id: nil) if @resource.driver.present?
      elsif @resource.instance_of?(Driver)
        @resource.car.update(driver_id: nil) if @resource.car.present?
      end
      if @resource.destroy
        render json: { message: "#{@resource.class.name} deleted successfully" }, status: :ok
      else
        render json: { errors: @resource.errors.full_messages }, status: :unprocessable_entity
        raise ActiveRecord::Rollback
      end
    end
  end

  private

  def car_params
    @driver = Driver.find_by_id(params[:driver_id]) if params[:driver_id].present?
    params.require(:item).permit(
      :name,
      :oil_milage,
      :auto_milage,
      :note,
      :model,
      :car_type,
      :transmission_type,
      :transmission_milage,
      :milage,
      :for_bidding,
      :last_bid,
      :buy_limit,
      :commercial,
      :public,
      :chassis_number,
      :driver_id,
      tires_age: %i[tirerf tirelf tirerb tirelb]
    ).merge(
      driver: @driver,
      user: current_devise_api_token.resource_owner
    )
  end
end

def driver_params
  @car = Car.find_by_id(params[:car_id]) if params[:car_id].present?
  raise 'Car already has a driver' if @car&.driver.present?

  params.require(:item).permit(
    :name,
    :identification,
    :phone_number,
    :nationality
  ).merge(
    car: @car,
    user: current_devise_api_token.resource_owner
  )
end

def bill_params
  @car = Car.find_by_id(params.require(:car_id))
  user = @car.user
  check_user(user)
  params.require(:item).permit(
    :total,
    :note,
    :date
  ).merge(
    car: @car,
    user: current_devise_api_token.resource_owner
  )
end

def revenue_params
  @car = Car.find_by_id(params.require(:car_id))
  params.require(:item).permit(
    :revenue,
    :note,
    :date
  ).merge(
    car: @car,
    user: current_devise_api_token.resource_owner
  )
end

def check_driver(driver)
  return if driver.nil?

  raise ActiveRecord::RecordNotDestroyed, 'You need to remove or change the driver first'
end

def useru_params
  params.require(:user).permit(
    :name,
    :phone_number
  )
end

def caru_params
  params.require(:item).permit(
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

def driveru_params
  params.require(:item).permit(
    :name,
    :identification,
    :phone_number,
    :nationality,
    :car
  ).merge(
    user: current_devise_api_token.resource_owner
  )
end

def billu_params
  @car = Car.find_by_id(params[:car_id]) if params[:car_id].present?
  params.require(:item).permit(
    :total,
    :note,
    :date
  )
end

def revenueu_params
  @car = Car.find_by_id(params.require(:car_id))
  params.require(:item).permit(
    :revenue,
    :note,
    :date
  ).merge(
    car: @car,
    user: current_devise_api_token.resource_owner
  )
end
