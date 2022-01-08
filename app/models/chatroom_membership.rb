class ChatroomMembership < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user

  #validation needs to be tweaked
  validates :user, uniqueness: { 
    scope: :chatroom, 
    message: -> (object, data) do
      "is already a member of that chatroom"
    end
    }
end
