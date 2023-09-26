import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainSection from '../Components/MainSection'

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainSection />
    </div>
  )
}

export default Main