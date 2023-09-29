import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chats from '../Components/Chats'
import Conversation from './../Components/Conversation';

const ChatApp = () => {
  return (
    <div className="flex dark:bg-gray-700" key={12}>
      <Sidebar />
      <Chats />
      <Conversation />
    </div>
  )
}

export default ChatApp