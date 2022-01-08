class Api::ChatroomMembershipsController < ApplicationController

  def create
    chatroom = Chatroom.find(params[:chatroom_id])
    chatroom.chatroom_memberships.create(user: @current_user)
    render json: chatroom, status: :created
  end

end
