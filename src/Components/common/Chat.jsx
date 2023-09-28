import React from 'react'
import { Link } from 'react-router-dom';

const Chat = (props) => {
    const obj = props.chatObj;
    return (
        <Link className={`${props.class.bg} w-full h-16 flex items-center p-2 gap-2 rounded-lg cursor-pointer shadow`}>
            <img src={obj.avatar} alt={obj.name} className='w-8 h-8 rounded-full' />
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-center w-full">
                    <p className={`${props.class.color} text-[9.5pt] font-bold`}>{obj.name}</p>
                    <span className="text-[9pt] text-gray-300">{obj.time}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className={`text-[8pt] ${props.class.color}`}>{obj.lastMessage}</p>
                    { obj.unreadMessage === 0
                        ? <span className='w-6 h-6 rounded-full bg-blue-700 text-white'>{obj.unreadMessage}</span>
                        : <span></span> }
                </div>
            </div>
        </Link>
    )
}

export default Chat