import { useState } from "react"

export default function Header({theme}) {
  const[isdark,setisdark]=theme
  // if(isdark)
  // {
  //   document.body.classList.add('dark')
  // }
  // else
  // {
  //   document.body.classList.remove('dark')
  // }
 
  return (
    <header className= {`header-container ${isdark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
           setisdark(!isdark)
           localStorage.setItem('isDarkMode',!isdark)
           }}>
          <i className={ `fa-solid fa-${isdark ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{isdark? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}