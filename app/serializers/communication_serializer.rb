class CommunicationSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :message, :creator
end
