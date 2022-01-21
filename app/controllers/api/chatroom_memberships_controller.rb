class Api::ChatroomMembershipsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def create
    chatroom = Chatroom.find(params[:chatroom_id])
    chatroom.chatroom_memberships.create!(user: current_user)
    render json: chatroom, status: :created
  end

  def destroy
    membership = ChatroomMembership.find(params[:id])
    membership.destroy
    chatroom = Chatroom.find(params[:chatroom_id])
    render json: chatroom, status: :ok
  end

  private

  def render_not_found
    render json: { errors: ['Chatroom does not exist']}, status: :not_found
  end

end
