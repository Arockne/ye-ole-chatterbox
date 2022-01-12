class Api::CommunicationsController < ApplicationController

  def create
    communication = current_user.communications.create!(communication_params)
    render json: communication, status: :created
  end

  private
  
  def communication_params
    params.permit(:message, :chatroom_id)
  end
end
