import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="absolute top-0 w-full right-0 h-16 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-600 p-3">
      <div className="profile flex items-center gap-3">
        <div className="w-10 h-10 round-full">
          <img src="./img/profile2.jpg" alt="profile" className='rounded-full' />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-normal dark:text-gray-200">{user?.name}</h4>
          <p className="text-sm flex items-center leading-4 gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-green-500 mt-[3px]"></span>
            <span className='text-gray-400 text-[8pt]'>Active now</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header