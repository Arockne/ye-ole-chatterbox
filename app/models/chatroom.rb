class Chatroom < ApplicationRecord
  has_many :chatroom_memberships
  has_many :members, through: :chatroom_memberships, source: :user
end
