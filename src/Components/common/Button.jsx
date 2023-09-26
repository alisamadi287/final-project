import React from 'react'

const Button = ({ icon }) => {
  return (
    <button className='p-2 rounded-lg w-8 h-8'>
        { icon }
    </button>
  )
}

export default Button