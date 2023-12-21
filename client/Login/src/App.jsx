import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Todolist from './components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}>

      </Route>
      <Route path='/todo' element={<Todolist/>}></Route>
    </Routes>
    </>
  )
}

export default App
