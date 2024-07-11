import "./Dashboard.css";
// import DashboardCards from './DashboardCards/DashboardCards';
// import Schedule from './Schedule/Schedule';
// import CompanyStatus from './CompanyStatus/CompanyStatus';
// import JobStatus from './JobStatus/JobStatus';
// import PerformanceInsights from './PerformanceInsights/PerformanceInsights';

import DashboardBottom from './DashboardBottom/DashboardBottom';
import DashboardTop from './DashboardTop/DashboardTop';





function Dashboard() {
  return(
    <div className="dashboard">
      <DashboardTop/>
      <DashboardBottom/>
    </div>
  );
}
export default Dashboard;




// function Dashboard() {
//   return (
//     <>
//       <div className="dashboard_container flex justify-center ">
//         <div className="count_section">
//         <DashboardCards/>
//         <CompanyStatus/>
//         <JobStatus/>
//         <PerformanceInsights/>
//         </div>
//         <div className="schedule_section">
//         <Schedule/>
//         </div>
//       </div>

//     </>
//   );
// }

// export default Dashboard;