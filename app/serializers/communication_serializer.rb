class CommunicationSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :message

  belongs_to :user, serializer: UserSerializer
end