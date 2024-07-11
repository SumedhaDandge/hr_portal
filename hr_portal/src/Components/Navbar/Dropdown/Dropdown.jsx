
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown() {
  // Placeholder data (replace with actual data from your application state)
  const profilePicUrl = 'https://via.placeholder.com/50'; // Example URL for profile picture
  const employeeName = 'Manasi';
  const designation = 'HR Executive';

  return (
    <div className="dropdown-container">
      <div className="profile-info">
        <img src={profilePicUrl} alt="Profile" className="profile-pic" />
        <div className="employee-info">
          <div className="employee-name">{employeeName}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
      <div className="dropdown-icon">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}

export default Dropdown;



 