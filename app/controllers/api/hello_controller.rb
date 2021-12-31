class Api::HelloController < ApplicationController
  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }, status: :ok
  end
end
