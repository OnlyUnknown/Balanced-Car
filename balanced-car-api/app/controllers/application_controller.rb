class ApplicationController < ActionController::API
  def check_user(user, current_user)
    return if user == current_user

    raise ActiveRecord::RecordNotDestroyed, 'You are not authorized'
  end
end
