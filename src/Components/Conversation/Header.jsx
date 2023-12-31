import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import profile from '../../assets/img/profile2.jpg';
import { ChatContext } from '../../Context/ChatContext';
import { useFectchRecipient } from '../../Hooks/useFetchRecipient';

const Header = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, onlineUsers } = useContext(ChatContext);
  const { recipientUser } = useFectchRecipient(currentChat, user);
  const isOnline = onlineUsers?.some((onlineUser) => onlineUser?.userId === recipientUser?._id);
  return (
    <div className="w-full z-2 right-0 flex items-center h-16 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-600 p-3">
      {recipientUser ? <div className="profile flex items-center gap-3">
        <div className="w-10 h-10 round-full">
          <img src={profile} alt="profile" className='rounded-full' />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-normal dark:text-gray-200">{recipientUser?.name}</h4>
          { isOnline && <p className="text-sm flex items-center leading-4 gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-green-500 mt-[3px]"></span>
            <span className='text-gray-400 text-[8pt]'>Active now</span>
          </p> }
        </div>
      </div> : <h4 className="font-semibold text-normal dark:text-gray-200"> No User </h4>}
    </div>
  )
}

export default Header