class Api::ChatroomsController < ApplicationController

  def index
    chatrooms = Chatroom.all
    render json: chatrooms, status: :ok
  end

  def show
    chatroom = Chatroom.find(params[:id])
    render json: chatroom, status: :ok, serializer: ChatroomShowSerializer
  end 

end
