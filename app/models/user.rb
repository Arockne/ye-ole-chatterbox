class User < ApplicationRecord
  has_many :chatroom_memberships, dependent: :destroy
  has_many :memberships, through: :chatroom_memberships, source: :chatroom
  has_many :messages, dependent: :destroy
  
  def chatlog
    self.memberships.map do |membership|
      {
        chatroom: membership.name,
        messages: membership.messages.where(user: self).last(5)
      }
    end
  end

  validates :username, presence: true, uniqueness: { case_sensitive: false }

  has_secure_password
end
