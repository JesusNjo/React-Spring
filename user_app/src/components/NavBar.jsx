import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark p-3 '>
        <div className='cotainer d-flex'>
            <Link className='navbar-brand' to={"/"}>List</Link>
            <Link className='navbar-brand' to={"/crear"}>Form</Link>
        </div>
    <input className='navbar-brand' type="text" placeholder='Search an user'/>

    </nav>
  )
}
