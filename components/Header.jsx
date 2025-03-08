import { useState } from "react"

export default function Header() {
  const[isdark,setisdark]=useState(false)
 
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{document.body.classList.toggle('dark')
           setisdark(!isdark)
           }}>
          <i className={ `fa-solid fa-${isdark ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{isdark? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}