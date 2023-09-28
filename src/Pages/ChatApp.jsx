import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainSection from '../Components/MainSection'
import Chats from '../Components/Chats'

const ChatApp = ({ swicthTheme }) => {
  return (
    <div className="flex">
      <Sidebar />
      <Chats {...swicthTheme } />
      <MainSection />
    </div>
  )
}

export default ChatApp