class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  
  def show
    render json: @current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    if (current_user.id == params[:id].to_i)
      current_user.update!(update_user_params)
      render json: current_user, status: :ok
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url)
  end

  def update_user_params
    params.permit(:image_url)
  end
end
