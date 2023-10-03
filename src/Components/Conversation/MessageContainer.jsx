import React from 'react';
import profile1 from '../../assets/img/profile4.png';
import profile2 from '../../assets/img/profile3.png';

const MessageContainer = () => {
  return (
    <div className="h-full w-full flex flex-col justify-end gap-4 py-4">
      <div className='flex justify-end items-start gap-2'>
        <p className='p-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded text-white max-w-[300px] shadow-lg'>Hi dear!!!</p>
        <div className="w-7 h-7 round-full">
          <img src={profile1} alt="profile" className='rounded-full shadow-lg' />
        </div>
      </div>
      <div className='flex justify-start items-start gap-2'>
        <div className="w-7 h-7 round-full">
          <img src={profile2} alt="profile" className='rounded-full shadow-lg' />
        </div>
        <p className='bg-gray-300 dark:bg-gray-600 p-2 rounded text-black-700 dark:text-gray-200 flex justify-start shadow-lg max-w-[300px]'>Hello sir, how are you doing? I hope you are doing really well.</p>
      </div>
    </div>
  )
}

export default MessageContainer