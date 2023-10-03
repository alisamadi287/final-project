import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ChatApp from './Pages/ChatApp'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { AuthContext } from './Context/AuthContext'
import { ChatContextProvider } from './Context/ChatContext'
import './assets/css/ionicons.min.css';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path='/login' element={user ? <ChatApp /> : <Login />} />
        <Route path='/register' element={user ? <ChatApp /> : <Register />} />
        <Route path='/' element={user ? <ChatApp /> : <Login />} />
        <Route path='*' element={user ? <ChatApp /> : <Login />} />
      </Routes>
    </ChatContextProvider>
  )
}

export default App