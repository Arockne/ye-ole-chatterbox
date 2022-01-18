class Communication < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  validates :message, presence: true
  
end
