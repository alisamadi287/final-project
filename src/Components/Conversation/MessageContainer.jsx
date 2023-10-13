import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { ChatContext } from '../../Context/ChatContext';
import { useFectchRecipient } from '../../Hooks/useFetchRecipient';
import Loading from './../common/Loading';

const MessageContainer = () => {
  const { user } = useContext(AuthContext);
  const { messages, currentChat, isMessageLoading, messageError } = useContext(ChatContext);
  const { recipientUser } = useFectchRecipient(currentChat, user);
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "smooth"});
  }, [messages])

  if (!recipientUser) {
    return (<div className="flex-center flex-col w-full dark:text-gray-200">
      <p>No conversation is selected yet...</p>
    </div>)
  }

  if (isMessageLoading) {
    return (
      <div className="flex-center flex-col w-full">
        <Loading />
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-3 h-full overflow-auto p-2" ref={scroll}>
        {messages && messages.map((message, index) => <div key={index} className={`flex flex-col chat chat-start ${message.senderId === user._id ? "sender" : "reciever"} p-2 max-w-[300px]`}>
          <span className='chat-bubble'>{message.text}</span>
          <span className='text-[8.5pt] text-gary-400 mt-2'>{message.createdAt}</span>
      </div>)}
    </div>
  );
}

export default MessageContainer