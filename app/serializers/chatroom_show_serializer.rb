class ChatroomShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_member

  has_many :chatroom_memberships
  has_many :members, serializer: MemberSerializer
  has_many :messages

  def current_member
    object.chatroom_memberships.select('chatroom_memberships.id, chatroom_memberships.user_id, chatroom_memberships.chatroom_id').where(user: current_user).first
  end

end
