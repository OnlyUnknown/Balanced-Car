class ApplicationController < ActionController::API
  def check_user(user)
    return if user == current_devise_api_token.resource_owner

    raise ActiveRecord::RecordNotDestroyed, 'You are not authorized'
  end
end
