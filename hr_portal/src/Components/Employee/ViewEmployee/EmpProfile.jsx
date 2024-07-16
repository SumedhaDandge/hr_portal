import downloadIcon from '../../../assets/downloadicon.png';
import editIcon from '../../../assets/edit-white.svg';
import briefCaseIcon from '../../../assets/briefcase.svg';
import gmailIcon from '../../../assets/gmail.svg';


const EmpProfile = () => (
    <div className="emp-profile">
      <div className="empProfile-header">
        <div className="empProfile-pic"></div>
        <div className="empProfile-info">
          <h2>Manasi</h2>
          <p>
            <span><img src={briefCaseIcon} alt="" /></span>
            HR Executive</p>
          <p>
          <img src={gmailIcon} alt="" />
            manasi@vitric.in</p>
        </div>
        <div className="empProfile-actions">
          <button className="download-btn"><img src={downloadIcon} alt="" /></button>
          <button className="profileEdit-btn purpleBtn"> <img src={editIcon} alt="" /> Edit</button>
        </div>
      </div>
    </div>
  );
  
  export default EmpProfile;