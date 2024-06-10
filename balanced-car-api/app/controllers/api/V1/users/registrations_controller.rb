# frozen_string_literal: true

class Api::V1::Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionFix
  respond_to :json
  def create
    @user = User.new(user_params)
    if @user.save
      render json: {
        messages: "Sign Up Successfully",
        is_success: true,
        data: { user: @user }
      }, status: :ok
    else
      render json: {
        messages: "Sign Up Failed",
        is_success: false,
        data: {message: @user.errors.full_messages}
      }, status: :unprocessable_entity
    end
  end
  private


  def respond_with(resource, _opts = {})
    if request.method == "POST" && resource.persisted?
      render json: {
        status: {code: 200, message: "Signed up sucessfully."},
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }, status: :ok
    elsif request.method == "DELETE"
      render json: {
        status: { code: 200, message: "Account deleted successfully."}
      }, status: :ok
    else
      print resource
      render json: {
        status: {code: 422, message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
  def user_params
    params.require(:user).permit(
                                  :email, :password, :password_confirmation)
  end

end
