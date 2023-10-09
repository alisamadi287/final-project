import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useFectchRecipient } from '../../Hooks/useFetchRecipient';
import profile from '../../assets/img/profile.svg';
import { ChatContext } from '../../Context/ChatContext';

const Chat = ({ chat, user, className }) => {
    const { recipientUser } = useFectchRecipient(chat, user);
    const { onlineUsers } = useContext(ChatContext);
    const isOnline = onlineUsers?.some((onlineUser) => onlineUser?.userId === recipientUser?._id);
    return (
        <Link className={`${className.bg} relative w-full h-16 flex items-center p-2 gap-2 rounded-lg cursor-pointer shadow`}>
            <img src={profile} alt={``} className='w-8 h-8 rounded-full' />
            { isOnline && <span className="block w-2 h-2 rounded-full bg-green-500 absolute top-10 left-8"></span> }
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-center w-full">
                    <p className={`${className.color} text-[9.5pt] font-bold`}>{recipientUser?.name}</p>
                    <span className="text-[9pt] text-gray-400 dark:text-gray-300">9:45</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className={`text-[8pt] ${className.color}`}>Text message here...</p>
                    <span className='w-4 h-4 text-[8pt] text-center rounded-full bg-blue-700 text-gray-300'>2</span>
                </div>
            </div>
        </Link>
    )
}

export default Chat