import { IoMdNotificationsOutline } from 'react-icons/io';
import '../Navbar.css'

function NotificationsButton() {
  return (
    <div className="notification-icon-container">
      <IoMdNotificationsOutline className='icon' />
    </div>
  );
}

export default NotificationsButton;
