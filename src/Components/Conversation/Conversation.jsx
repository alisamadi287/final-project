import React from 'react'
import Header from './Header'
import MessageContainer from './MessageContainer'
import MessageInput from './MessageInput'

const Conversation = () => {
  return (
    <section className="relative w-full">
      <Header />
      <div className="h-full w-full flex flex-col justify-end p-4">
        <MessageContainer />
        <MessageInput />
      </div>
    </section>
  )
}

export default Conversation