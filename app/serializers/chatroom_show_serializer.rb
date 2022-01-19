class ChatroomShowSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :chatroom_memberships
  has_many :members, serializer: MemberSerializer
  has_many :messages
end
