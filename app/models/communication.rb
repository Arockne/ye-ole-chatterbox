class Communication < ApplicationRecord
  belongs_to :chatroom_membership
  belongs_to :chatroom
end
