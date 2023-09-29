import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ChatApp from './Pages/ChatApp'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { AuthContext } from './Context/AuthContext'

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
        <Route path='/login' element={user ? <ChatApp /> : <Login />} />
        <Route path='/register' element={user ? <ChatApp /> : <Register />}  />
        <Route path='/' element={user ? <ChatApp /> : <Login />}  />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App