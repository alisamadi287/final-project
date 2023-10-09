import React, { useContext, useState } from 'react'
import { ChatContext } from '../../Context/ChatContext';
import { AuthContext } from '../../Context/AuthContext';

const MessageInput = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, sendTextMessage } = useContext(ChatContext);
  const [textMessage, setTextMessage] = useState("");
  return (
    <div className="w-full h-16 flex gap-3 items-center bg-white border border-gray-300 shadow-sm p-4 dark:bg-gray-800 dark:border-none">
        <input type="text" value={textMessage} onChange={e => setTextMessage(e.target.value)} placeholder="Write a message" className="border-none outline-none rounded-full bg-blue-50 dark:bg-gray-500 dark:text-gray-200 py-2 px-3 w-[90%]" />
        <span onClick={() => sendTextMessage(textMessage, user, currentChat?._id, setTextMessage)} className='w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg'>
          <i className="ion-android-send text-xl text-gray-100 -rotate-45"></i>
        </span>
    </div>
  )
}

export default MessageInput