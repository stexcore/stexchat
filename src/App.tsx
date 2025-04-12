import { Navigate, Route, Routes } from 'react-router'
import SignInPage from './pages/signin/signin'
import SignUpPage from './pages/signup/signup'
import MainLayout from './layouts/MainLayout'
import ChatsLayout from './layouts/ChatsLayout'
import ChatsPage from './pages/chats/chats'
import ChatItemLayout from './layouts/ChatItemLayout'
import ChatPage from './pages/chats/[id_chat]/chat'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/signin"/>} />

      {/* Authentication */}
      <Route element={<MainLayout/>}>
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Route>

      {/* All Chats */}
      <Route element={<ChatsLayout/>}>
        <Route path='/chats' element={<ChatsPage/>} />
      </Route>

      {/* Chat item */}
      <Route element={<ChatItemLayout/>}>
        <Route path='/chats/:id_chat' element={<ChatPage/>} />
      </Route>
    </Routes>
  )
}

export default App
