import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "../css/Navigation.css"

function NavComponent() {
  let userName = localStorage.getItem("UserName");
  let photo = localStorage.getItem("avatarUrl")
  return (
    <>
      <nav className="sidebar">
            <Link className='NavItems' to="/home">Home</Link>
            <Link className='NavItems' to="/newQuote">New Quote</Link>
            <Link className='NavItems' to="/profile">
              <img className="photo" src={photo} alt="photo"/>
            </Link>
      </nav>

      <Outlet />
    </>
  )
}

export default NavComponent