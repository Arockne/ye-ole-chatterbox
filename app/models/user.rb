class User < ApplicationRecord
  has_many :chatroom_memberships, dependent: :destroy
  has_many :memberships, through: :chatroom_memberships, source: :chatroom
  has_many :communications, dependent: :destroy

  validates :username, presence: true, uniqueness: { case_sensitive: false }

  has_secure_password
end
