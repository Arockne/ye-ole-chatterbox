class Api::HelloController < ApplicationController
  skip_before_action :authorize, only: [:hello_world]
  
  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }, status: :ok
  end
end
