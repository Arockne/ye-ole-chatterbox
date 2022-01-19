class MessageSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :content

  belongs_to :user, serializer: UserSerializer
end