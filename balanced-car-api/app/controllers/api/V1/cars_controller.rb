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

  def show_public_group
    @group = Group.find_by(id: params[:group_id], public: true)
    if @group
      render json: @group, except: %i[created_at updated_at]
    else
      render json: { error: 'Group not found or not public' }, status: :not_found
    end
  end

  def show_group_items
    @group = Group.find_by(id: params[:group_id])
    if @group
      case @group.group_type
      when 'drivers'
        render json: @group.items.where(type: 'Driver'), except: %i[created_at updated_at]
      when 'cars'
        render json: @group.items.where(type: 'Car'), except: %i[created_at updated_at]
      else
        render json: { error: 'Group type not recognized' }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Group not found' }, status: :not_found
    end
  end
end

private

def check_publicity(car)
  raise ActiveRecord::RecordNotDestroyed, 'It is not a public car or not found' if car.nil? || car.public == false

  nil if car.public == true
end
