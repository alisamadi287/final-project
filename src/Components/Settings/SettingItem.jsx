import React from 'react'

const SettingItem = ({icon, text}) => {
  return (
    <div className='flex items-center gap-2 w-full rounded p-2 text-gray-700 cursor-pointer dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-300'>
        <i className={icon}></i>
        <span className='text-normal'>{text}</span>
        <i className="ion-ios-arrow-forward ml-auto"></i>
    </div>
  )
}

export default SettingItem