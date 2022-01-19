class Api::MessagesController < ApplicationController

  def create
    message = current_user.messages.create!(message_params)
    render json: message, status: :created
  end

  private
  
  def message_params
    params.permit(:content, :chatroom_id)
  end
end
