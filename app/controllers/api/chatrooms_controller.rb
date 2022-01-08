class Api::ChatroomsController < ApplicationController

  def index
    chatrooms = Chatroom.all
    render json: chatrooms, status: :ok
  end
end
