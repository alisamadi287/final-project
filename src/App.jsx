import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ChatApp from './Pages/ChatApp'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'

const App = () => {

  const [ theme, setTheme ] = useState('light');

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');  
    }
  }, theme);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={ <ChatApp switchTheme={handleThemeSwitch} />} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App