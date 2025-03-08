import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'

const App = () => {
  const[isdark,setisdark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
    <Header theme={[isdark,setisdark]}/>
    <Outlet context={[isdark,setisdark]}/>
  </>
  )
}

export default App;