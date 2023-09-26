import React from 'react'

const MessageContainer = () => {
  return (
    <div className="h-full w-full flex flex-col justify-end gap-4 py-4">
      <div className='flex justify-end items-start gap-2'>
        <p className='p-2 bg-blue-500 rounded text-white max-w-[200px] shadow-lg'>Hi dear!!!</p>
        <div className="w-7 h-7 round-full">
          <img src="./img/profile1.jpg" alt="profile" className='rounded-full shadow-lg' />
        </div>
      </div>
      <div className='flex justify-start items-start gap-2'>
        <div className="w-7 h-7 round-full">
          <img src="./img/profile2.jpg" alt="profile" className='rounded-full shadow-lg' />
        </div>
        <p className='bg-gray-300 p-2 rounded text-black-700 flex justify-start shadow-lg max-w-[200px]'>Hello sir, how are you doing? I hope you are doing really well.</p>
      </div>
    </div>
  )
}

export default MessageContainer