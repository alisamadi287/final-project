import React, { useContext, useState } from 'react';
import logo from '../assets/img/logo.svg';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [ selected, setSelected ] = useState(0);
  const { logoutUser } = useContext(AuthContext);
  return (
    <aside className="bg-white p-5 pt-8 h-screen w-20 myshadow flex flex-col items-center dark:bg-gray-900">
      <div className="w-10 h-10 cursor-pointer rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
        <img src={logo} alt="logo" className='w-6 h-6' />
      </div>
      <div className="gap-2 flex flex-col h-full mb-3 mt-6">
        <div className="flex flex-col gap-3">
            <Link to="/admin/chats" className='w-8 h-8 text-gray-700 dark:text-gray-200 p-2 rounded-lg bg-blue-50 text-center leading-[18px] dark:bg-gray-700'><i className="ion-android-chat"></i></Link>
            <Link to="/admin/contacts" className='w-8 h-8 text-gray-700 dark:text-gray-200 p-2 rounded-lg bg-blue-50 text-center leading-[18px] dark:bg-gray-700'><i className="ion-ios-person"></i></Link>
            <Link to="/admin/settings" className='w-8 h-8 text-gray-700 dark:text-gray-200 p-2 rounded-lg bg-blue-50 text-center leading-[18px] dark:bg-gray-700'><i className="ion-android-settings"></i></Link>
        </div>
        <Link onClick={ () => logoutUser() } to={"/login"} className='p-2 rounded-lg flex-center w-8 h-8 text-gray-700 dark:text-gray-200 mt-auto'>
          <i className="ion-android-exit"></i>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar