class Api::ChatroomsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    chatrooms = Chatroom.all
    render json: chatrooms, status: :ok,
    include: ['messages', 'messages.user', 'members']
  end

  def show
    chatroom = Chatroom.find(params[:id])
    render json: chatroom, status: :ok
  end

  private

  def render_not_found
    render json: { errors: ["Chatroom does not exist"] }, status: :not_found
  end

end
