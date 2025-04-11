import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import SignInPage from './pages/signin/signin'
import SignUpPage from './pages/signup/signup'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/signin"/>} />
      <Route element={<MainLayout/>}>
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Route>
    </Routes>
  )
}

export default App
