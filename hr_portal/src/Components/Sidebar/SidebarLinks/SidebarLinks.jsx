import React from 'react';
import '../Sidebar.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { MdSchedule } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase , faGear } from '@fortawesome/free-solid-svg-icons';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

const SidebarLinks = () => {
  return (
    <div className='SideBar_Links'>
      <Logo />
      <div className="nav_links">
        <div className='link active'>
          <TbLayoutDashboardFilled className='w-6 h-6 text-dark cursor-pointer'/>
          <Link to="/">Dashboard</Link>
        </div>

        <div className='link '>
          <IoIosPeople className='w-6 h-6 text-dark cursor-pointer'/>
          <Link to="/employees">All Employees</Link>
        </div>

        <div className='link'>
          <MdOutlineAccessTimeFilled className='w-6 h-6 text-dark cursor-pointer'/>
          <Link to="/schedule">Schedule</Link>
        </div>

        <div className='link'>
          <FaBriefcase className='w-5 h-5 text-dark cursor-pointer'/>
          <Link to="/jobs">Jobs</Link>
        </div>

        <div className='link'>
          <FaUserFriends className='w-6 h-6 text-dark cursor-pointer'/>
          <Link to="/candidates">Candidates</Link>
        </div>

        <div className='link'>
          <LuLayoutDashboard className='w-6 h-6 text-dark cursor-pointer'/>
          <Link to="/clients">Clients</Link>
        </div>

        <div className='link'>
          <FontAwesomeIcon icon={faGear} className='w-6 h-6 text-dark cursor-pointer' />
          <Link to="/settings">Settings</Link>
        </div>

        <div className='link'>
          <FaUserFriends className='w-6 h-6 text-dark cursor-pointer'/>
          <Link to="/master-data">Master Data</Link>
        </div>
      </div>
    </div>
  )
}

export default SidebarLinks;
