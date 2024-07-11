import './ScheduleButton.css';
import { MdDateRange } from "react-icons/md";


function ScheduleButton() {
  return (
    <>
    <div className="schedule-button-container mb-2 ">
      <h1 className="schedule-text text-base font-medium ">My Schedule</h1>
      
      <div className="icon-container">
        <MdDateRange className="schedule-icon" />
      </div>  
    </div>
    

    </>
  );
}

export default ScheduleButton;
