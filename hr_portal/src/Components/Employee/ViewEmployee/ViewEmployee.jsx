import './viewEmployee.css';
import EmployeeProfile from './EmpProfile.jsx';
import ViewEmployeeTabs from './ViewEmpTabs.jsx';


const ViewEmployee = () => {
  return (
    <>
      <div className="viewEmp-container">

        <div className="viewEmp-header">
          <h1>Profile</h1>
        </div>
        <EmployeeProfile/>
        <ViewEmployeeTabs/>

      </div>
    </>
  );
};

export default ViewEmployee;
