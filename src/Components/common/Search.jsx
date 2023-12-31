import React from 'react'

export default function Search({ icon, placeholder}) {
  return (
    <div className={`w-full h-10 flex items-center gap-2 bg-blue-50 dark:bg-gray-600 shadow-sm rounded-full px-4 py-2`}>
        <i className={icon}></i>
        <input type="text" className='border-none outline-none bg-transparent dark:text-gray-200' placeholder={placeholder} />
    </div>
  )
}
