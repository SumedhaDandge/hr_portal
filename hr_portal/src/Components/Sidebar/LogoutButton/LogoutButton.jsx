import React from 'react';
import { CiLock } from "react-icons/ci";
import '../Sidebar.css'




const LogoutButton = () => {
  return (
    <button className='logout_btn'> <CiLock className='w-6 h-6 text-white cursor-pointer' />Logout</button>
  )
}

export default LogoutButton;