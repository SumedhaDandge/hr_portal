import DashboardCards from './DashboardCards/DashboardCards';
import CompanyStatus from './CompanyStatus/CompanyStatus';
import JobStatus from './JobStatus/JobStatus';
import '../DashboardTop.css';


function MainContain() {
    return (
      <div className="main_contain">
        <DashboardCards/>
        <CompanyStatus/>
        <JobStatus/>
        
      </div>
    );
  }
  
  export default MainContain;