import React, { useState } from 'react';
import Search from './common/Search';
import Divider from './common/Divider';
import Chat from './common/Chat';
import { CHATS } from '../Constants/data';

const Chats = ({ switchTheme }) => {
    const [ selected, setSelected ] = useState(0);
    const searchIcon = "ion-ios-search text-blue-900";
    return (
        <div className='w-72 flex flex-col h-screen bg-[#FAF8FF] shadow py-5 px-4 dark:bg-gray-800'>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Chats</h3>
                <button onClick={switchTheme} className='cursor-pointer rounded-full bg-blue-50 w-8 h-8 text-center shadow-lg'>
                    <i className="ion-ios-moon text-2xl text-gray-700"></i>
                </button>
            </div>
            <Search icon={searchIcon} placeholder={"Search"} />
            <p className="text-sm text-blue-900 mt-5 font-semibold">Archieved</p>
            <Divider />
            <div className="flex flex-col gap-3 overflow-auto">
                <p className="text-sm font-semibold mb-3">Pinned</p>
                {CHATS.filter(el => el.pinned).map((el) =>
                    el.index === selected ? 
                    <Chat chatObj={el} class={{bg:'bg-blue-600', color:'text-gray-200'}} />
                    : <Chat onClick={() => setSelected(el.index)} chatObj={el} class={{bg:'bg-white', color:'text-gray-600'}} />)}
                <p className="text-sm font-semibold mb-3">All chats</p>
                {CHATS.filter(el => !el.pinned).map((el) =>
                    el.index === selected ? 
                    <Chat chatObj={el} class={{bg:'bg-blue-600', color:'text-gray-200'}} />
                    : <Chat onClick={() => setSelected(el.index)} chatObj={el} class={{bg:'bg-white', color:'text-gray-600'}} />)}
            </div>

        </div>
    )
}

export default Chats