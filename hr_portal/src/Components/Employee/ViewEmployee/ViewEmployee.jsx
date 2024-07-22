import './viewEmployee.css';
// import EmployeeProfile from './EmpProfile.jsx';
// import ViewEmployeeTabs from './ViewEmpTabs.jsx';


import EmpProfile from "./EmpProfile.jsx"
import AddCandidate from "./ViewEmpTabs.jsx"

const ViewEmployee = () => {
  return (
    <>
      <div className="viewEmp-container">

        <div className="viewEmp-header">
          <h1>Profile</h1>
        </div>
        {/* <EmployeeProfile/>
        <ViewEmployeeTabs/> */}
        <EmpProfile/>
        <AddCandidate/>


      </div>
    </>
  );
};

export default ViewEmployee;
