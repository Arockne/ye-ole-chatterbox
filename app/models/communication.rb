class Communication < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  validates :message, presence: true

  def creator
    { id: user.id, username: user.username, image_url: user.image_url }
  end
end
