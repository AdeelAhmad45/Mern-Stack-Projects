import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-black h-[60px] w-full'>
            <div className='gap-3 flex '>
                <NavLink to='/alluser'><p className='text-white mx-2 my-4 items-center'>All User</p></NavLink>
                <NavLink to='/adduser'><p className='text-white mx-2 my-4 items-center'>Add User</p></NavLink> 
            </div>
    </div>
  )
}

export default Navbar