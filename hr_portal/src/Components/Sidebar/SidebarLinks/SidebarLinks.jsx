import React from 'react';
import '../Sidebar.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { MdSchedule } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase , faGear } from '@fortawesome/free-solid-svg-icons';
// import { FiSettings } from "react-icons/fi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import Logo from '../logo/logo';


const SidebarLinks = () => {
  return (

    <div className='SideBar_Links' >
    <Logo />
    <div className="nav_links ">
        <div className='link active '>
            <TbLayoutDashboardFilled  className='w-6 h-6 text-dark cursor-pointer'/>
            <a href="" >Dashboard</a>
        </div>

        <div className='link'>
            <IoIosPeople  className='w-6 h-6 text-dark cursor-pointer'/>
            <a href="">All Employees</a>
        </div>

        <div className='link'>
            {/* <MdSchedule  className='w-6 h-6 text-dark cursor-pointer'/> */}
            <MdOutlineAccessTimeFilled   className='w-6 h-6 text-dark cursor-pointer'/>
            <a href="">Schedule</a>
        </div>

        <div className='link'>
        {/* <FaBriefcase className='w-6 h-6 text-dark cursor-pointer'/> */}
        <FaBriefcase className='w-5 h-5 text-dark cursor-pointer'/>
        <a href="">Jobs</a>
      </div>

        <div className='link'>
            <FaUserFriends  className='w-6 h-6 text-dark cursor-pointer'/>
            <a href="">Candidates</a>
        </div>
        <div className='link'>
            <LuLayoutDashboard  className='w-6 h-6 text-dark cursor-pointer'/>
            <a href="">Clients</a>
        </div>
        <div className='link'>
            {/* <FiSettings  className='w-6 h-6 text-dark cursor-pointer'/> */}
            <FontAwesomeIcon icon={faGear} className='w-6 h-6 text-dark cursor-pointer' />
            <a href="">Settings</a>
        </div>
   </div>
    
    
    
    </div>


  )
}

export default SidebarLinks;