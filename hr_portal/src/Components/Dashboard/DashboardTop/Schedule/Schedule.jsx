import ScheduleButton from './ScheduleButton/ScheduleButton';
import '../DashboardTop.css';
import ScheduleDropdown from './ScheduleDropdown/ScheduleDropdown'


function Schedule() {
  return (
   <div className="schedule_container ">
      <ScheduleButton/>
      <ScheduleDropdown/>
   </div>

  );
}

export default Schedule;
