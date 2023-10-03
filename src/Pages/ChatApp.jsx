import React from 'react'
import Sidebar from '../Components/Sidebar'
import Menu from '../Components/Menu'
import Conversation from '../Components/Conversation/Conversation';

const ChatApp = () => {
  return (
    <div className="flex dark:bg-gray-700" key={12}>
      <Sidebar />
      <Menu />
      <Conversation />
    </div>
  )
}

export default ChatApp