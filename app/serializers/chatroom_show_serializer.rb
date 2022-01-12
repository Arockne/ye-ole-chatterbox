class ChatroomShowSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :members, serializer: MemberSerializer
  has_many :communications
end
