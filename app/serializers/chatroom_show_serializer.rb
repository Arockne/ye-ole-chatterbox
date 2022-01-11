class ChatroomShowSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :members, serializer: MembersSerializer
end
