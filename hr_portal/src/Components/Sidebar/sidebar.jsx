import LogoutButton from "./LogoutButton/LogoutButton";
import SidebarLinks from './SidebarLinks/SidebarLinks';
import './Sidebar.css';

function Sidebar() {
  return (
      <div className='sidebar p-4' >
        <SidebarLinks />
        <LogoutButton />
      </div>
    
  );
}

export default Sidebar;
