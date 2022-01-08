class User < ApplicationRecord
  has_many :chatroom_memberships
  has_many :chatrooms, through: :chatroom_memberships
  
  validates :username, presence: true, uniqueness: { case_sensitive: false }

  has_secure_password
end
