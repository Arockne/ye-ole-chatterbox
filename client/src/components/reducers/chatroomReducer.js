export function chatReducer(state, action) {
  switch(action.type) {
    case 'fetchSuccess': {
      return { ...state, chatroom: action.payload, errors: []}
    }
    case 'fetchFailure': {
      return { ...state, errors: action.payload }
    }
    case 'messageNew': {
      const updatedChatroom = { ...state.chatroom }
      updatedChatroom.messages = [ ...state.chatroom.messages, action.payload ]
      return { ...state, chatroom: updatedChatroom }
    }
    case 'messageEdit': {
      const updatedChatroom = { ...state.chatroom }
      updatedChatroom.messages = updatedChatroom.messages.map(message => {
        if (message.id === action.payload.id) {
          return action.payload;
        }
        return message;
      })
      return { ...state, chatroom: updatedChatroom }
    }
    case 'messageDelete': {
      const updatedChatroom = { ...state.chatroom }
      updatedChatroom.messages = updatedChatroom.messages.filter(message => message.id !== action.payload.id)
      return { ...state, chatroom: updatedChatroom }
    }
    case 'chatConnection': {
      return { ...state, chatConnection: action.payload}
    }
    default: {
      return state
    }
  }
}