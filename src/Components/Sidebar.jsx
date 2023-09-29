import React, { useContext, useState } from 'react'
import { NAV_BUTTON } from '../Constants/data'
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [ selected, setSelected ] = useState(0);
  const { logoutUser } = useContext(AuthContext);
  return (
    <aside className="bg-white p-5 pt-8 h-screen w-20 shadow-xl flex flex-col items-center dark:bg-gray-900">
      <div className="w-10 h-10 cursor-pointer rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
        <img src="./img/logo.svg" alt="logo" className='w-6 h-6' />
      </div>
      <div className="gap-2 flex flex-col h-full mb-3 mt-6">
        {NAV_BUTTON.map(el => 
        el.index === selected ?
          <button key={el.index} className='p-2 rounded-lg flex-center w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white'>
            {el.icon}
          </button> 
          : <button onClick={() => setSelected(el.index)} key={el.index} className='p-2 rounded-lg flex-center w-8 h-8 text-gray-700 dark:text-gray-200'>
            {el.icon}
          </button>
        )}
        <Link onClick={ () => logoutUser() } to={"/login"} className='p-2 rounded-lg flex-center w-8 h-8 text-gray-700 dark:text-gray-200 mt-auto'>
          <i className="ion-android-exit"></i>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar