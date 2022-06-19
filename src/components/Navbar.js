import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar-holder bg-secondary p-2'>
        <ul className='mb-0'>
            <li><NavLink style={({isActive})=>{return{color:isActive?'white':''}}} to="/">Home</NavLink></li>
            <li><NavLink style={({isActive})=>{return{color:isActive?'white':''}}} to="/login">Login</NavLink></li>
            <li><NavLink style={({isActive})=>{return{color:isActive?'white':''}}} to="/gitusers">Gitusers</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar