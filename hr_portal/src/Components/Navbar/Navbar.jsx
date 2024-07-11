import './Navbar.css';
import SearchButton from './SearchButton/SerachButton';
import Dropdown from './Dropdown/Dropdown';
import NotificationsButton from './NotificationIcon/NotificationsButton';

function Navbar() {
  const getCurrentDay = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
  };

  // Function to get the current date in a readable format (e.g., 26 June 2024)
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  };

  return (
    <div className="nav_bar  flex items-center justify-between">
      <div className="name_date">
        <h1>Good Morning, <span>Manasi!</span> 👋🏻</h1>
        <p>{getCurrentDay()}, {getCurrentDate()}</p>
      </div>
      <div className="search flex items-center space-x-4">
        <SearchButton />
        <NotificationsButton />
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
