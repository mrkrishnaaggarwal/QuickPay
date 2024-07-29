import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import {Send} from "./pages/Send"
import {MainPath} from "./pages/MainPath";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPath/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/send' element={<Send/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
