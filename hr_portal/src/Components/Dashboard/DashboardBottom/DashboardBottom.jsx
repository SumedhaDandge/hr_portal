import PerformanceInsights from './PerformanceInsights/PerformanceInsights';
import ActivityView from './ActivityView/ActivityView';
import './DashboardBottom.css';



function DashboardBottom() {
  return (
    <div className="dashboard_bottom">
      <PerformanceInsights />
      <ActivityView/>
    </div>
  );
}

export default DashboardBottom;