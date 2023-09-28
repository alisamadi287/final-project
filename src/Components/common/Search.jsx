import React from 'react'

export default function Search({ icon, placeholder}) {
  return (
    <div className={`w-full h-10 flex items-center gap-2 bg-blue-50 shadow-sm border border-blue-100 rounded-full px-4 py-2`}>
        <i className={icon}></i>
        <input type="text" className='border-none outline-none bg-transparent' placeholder={placeholder} />
    </div>
  )
}
