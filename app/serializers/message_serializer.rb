class MessageSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :content

  def created_at
    time = object.created_at
    time.to_formatted_s(:long_ordinal)
  end
  belongs_to :user, serializer: UserSerializer
end