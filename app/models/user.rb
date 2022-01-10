class User < ApplicationRecord
  has_many :chatroom_memberships
  has_many :memberships, through: :chatroom_memberships, source: :chatroom
  
  validates :username, presence: true, uniqueness: { case_sensitive: false }

  has_secure_password
end
