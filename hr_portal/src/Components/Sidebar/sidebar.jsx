import LogoutButton from "./LogoutButton/LogoutButton";
import SidebarLinks from './SidebarLinks/SidebarLinks';
import './Sidebar.css';

function Sidebar() {
  return (
      <div className='sidebar ' >
        <SidebarLinks />
        <LogoutButton />
      </div>
    
  );
}

export default Sidebar;
