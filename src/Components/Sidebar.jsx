import React, { useState } from 'react'
import { NAV_BUTTON } from '../Constants/data'

const Sidebar = () => {
  const [ selected, setSelected ] = useState(0);
  return (
    <aside className="bg-[#e1eef7] p-5 pt-8 h-screen w-20 shadow-xl flex flex-col items-center">
      <div className="w-10 h-10 cursor-pointer rounded-lg bg-blue-800 flex items-center justify-center">
        <img src="./img/logo.svg" alt="logo" className='w-6 h-6' />
      </div>
      <div className="gap-2 flex flex-col h-full mb-3 mt-6">
        {NAV_BUTTON.map(el => 
        el.index === selected ?
          <button className='p-2 rounded-lg flex-center w-8 h-8 bg-blue-700 text-white'>
            {el.icon}
          </button> 
          : <button onClick={() => setSelected(el.index)} className='p-2 rounded-lg flex-center w-8 h-8 text-gray-700'>
            {el.icon}
          </button>
        )}
        <button className='p-2 rounded-lg flex-center w-8 h-8 text-gray-700 mt-auto'>
          <i className="ion-android-exit"></i>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar