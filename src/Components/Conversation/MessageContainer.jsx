import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { ChatContext } from '../../Context/ChatContext';
import { useFectchRecipient } from '../../Hooks/useFetchRecipient';
import Loading from './../common/Loading';

const MessageContainer = () => {
  const { user } = useContext(AuthContext);
  const { messages, currentChat, isMessageLoading, messageError } = useContext(ChatContext);
  const { recipientUser } = useFectchRecipient(currentChat, user);

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
    <div className="flex flex-col gap-3 h-full overflow-auto p-2">
        {messages && messages.map((message, index) => <div key={index} className={`${message.senderId === user._id ? "sender" : "reciever"} p-2 max-w-[300px]`}>
          <span>{message.text}</span>
        </div>)}
      </div>
  );
}

export default MessageContainer