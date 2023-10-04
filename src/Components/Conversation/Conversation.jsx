import React from 'react'
import Header from './Header'
import MessageContainer from './MessageContainer'
import MessageInput from './MessageInput'

const Conversation = () => {
  return (
    <section className="container flex flex-col justify-between h-screen overflow-hidden">
      <Header />
      <MessageContainer />
      <MessageInput />
    </section>
  )
}

export default Conversation