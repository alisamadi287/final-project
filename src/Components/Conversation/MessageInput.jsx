import React from 'react'

const MessageInput = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between bg-white border border-gray-300 shadow-sm rounded px-4 dark:bg-gray-600 dark:border-none">
      <input type="text" placeholder="Write a message" className="border-none outline-none bg-transparent p-3 w-[90%]" />
      <span className='w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg'>
        <i className="ion-android-send text-xl text-gray-100 -rotate-45"></i>
      </span>
    </div>
  )
}

export default MessageInput