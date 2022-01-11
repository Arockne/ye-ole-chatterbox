class ChatroomMembership < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user
  has_many :communications

  #validation needs to be tweaked possibly with updating locales file
  validates :user, uniqueness: { 
    scope: :chatroom, 
    message: -> (object, data) do
      "is already a member of that chatroom"
    end
    }
end
