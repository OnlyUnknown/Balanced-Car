class Api::V1::CarsController < ApplicationController
  def show
    @car = Car.find_by_id(params[:id])
    check_publicity(@car)
    if @car.for_bidding == false
      render json: @car, except: %i[public for_bidding last_bid buy_limit commercial revenues chassis_number]
    else
      render json: @car, except: %i[public commercial chassis_number revenues]
    end
  end

  def show_public_groups
    @user = User.find_by_id(params[:id])
    if @user
      @public_groups = @user.groups.where(public: true)
      render json: @public_groups, except: %i[created_at updated_at]
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  def show_group_items
    @group = Group.find_by(id: params[:id], public: true)
    print @group
    if @group
      case @group.group_type
      when 'drivers'
        render json: @group.drivers, except: %i[created_at updated_at]
      when 'cars'
        render json: @group.cars, except: %i[created_at updated_at]
      else
        render json: { error: 'Group type not recognized' }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Group not found or not public' }, status: :not_found
    end
  end
end

private

def check_publicity(car)
  raise ActiveRecord::RecordNotDestroyed, 'It is not a public car or not found' if car.nil? || car.public == false

  nil if car.public == true
end
