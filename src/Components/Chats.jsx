import React, { useContext, useState } from 'react';
import Search from './common/Search';
import Divider from './common/Divider';
import Chat from './common/Chat';
import { CHATS } from '../Constants/data';
import { ThemeContext } from '../Context/ThemeContext';

const Chats = () => {
    const {theme, switchTheme} = useContext(ThemeContext);
    const [ selected, setSelected ] = useState(0);
    const searchIcon = "ion-ios-search text-blue-900 dark:text-gray-300";
    return (
        <div className='w-72 flex flex-col h-screen bg-[#FAF8FF] shadow py-5 px-4 dark:bg-gray-800'>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold dark:text-gray-200">Chats</h3>
                <button onClick={switchTheme} className='cursor-pointer rounded-full flex-center bg-blue-100 dark:bg-gray-400 w-8 h-8 text-center shadow-lg'>
                    <i className={`${theme==='light' ? 'ion-android-sunny  text-xl' : 'ion-ios-moon text-2xl'} text-gray-700 dark:text-white`}></i>
                </button>
            </div>
            <Search icon={searchIcon} placeholder={"Search"} />
            <p className="text-sm text-blue-900 mt-5 font-semibold dark:text-gray-200">Archieved</p>
            <Divider />
            <div className="flex flex-col gap-3 overflow-auto">
                <p className="text-sm font-semibold mb-3  dark:text-gray-200">Pinned</p>
                {CHATS.filter(el => el.pinned).map((el) =>
                    el.index === selected ? 
                    <Chat chatObj={el} key={el.index} class={{bg:'bg-gradient-to-r from-cyan-600 to-blue-600', color:'text-gray-200'}} />
                    : <Chat onClick={() => setSelected(el.index)} key={el.index} chatObj={el} class={{bg:'bg-white dark:bg-gray-600', color:'text-gray-600 dark:text-gray-200'}} />)}
                <p className="text-sm font-semibold mb-3  dark:text-gray-200">All chats</p>
                {CHATS.filter(el => !el.pinned).map((el) =>
                    el.index === selected ? 
                    <Chat chatObj={el} key={el.index} class={{bg:'bg-blue-600', color:'text-gray-200'}} />
                    : <Chat onClick={() => setSelected(el.index)} key={el.index} chatObj={el} class={{bg:'bg-white dark:bg-gray-600', color:'text-gray-600 dark:text-gray-200'}} />)}
            </div>

        </div>
    )
}

export default Chats