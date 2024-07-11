import MainContain from './main_contain/main_contain';
import Schedule from './Schedule/Schedule';
import './DashboardTop.css';



function DashboardTop() {
    return (
      <div className="dashboard_top">
        <MainContain/>
        <Schedule/>
      </div>
    );
  }
  
  export default DashboardTop;