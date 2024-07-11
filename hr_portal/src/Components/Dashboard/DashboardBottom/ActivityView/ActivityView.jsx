import ActivityViewButton from './AactivityButton/ActivityButton';
import ActivityInfo from './ActivityInfo/ActivityInfo';
import '../DashboardBottom.css';



function ActivityView() {
  return (
   <div className="activity_view">
    <ActivityViewButton/>
    <ActivityInfo/>

   </div>

  );
}

export default ActivityView;
