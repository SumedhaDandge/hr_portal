import React from 'react';
import '../ScheduleButton/ScheduleButton.css';
function ScheduleDropdown() {
  return (
    <div>
      <div className="schedule-dropdown-container">
      {/* <label htmlFor="dateRangeSelect">Select Date Range:</label> */}
      <select name="dateRangeSelect" id="dateRangeSelect" className="date-range-select">
        <option value="">Select Date Range:</option>
        <option value="yesterday">Yesterday</option>
        <option value="lastWeek">Last Week</option>
        <option value="lastMonth">Last Month</option>
        <option value="custom">Custom Range</option>
      </select>
    </div>

    <div className="task mb-4">
      <div className="task_date">Thursday, 14 May 2024</div>
     <div className="task_info">
     <div className="task_time">09:30</div>
     <div className="task_name">
      <h1>UI/UX Designer</h1>
      <p>Practical Task Review</p>
     </div>
     </div>
    </div>

    <div className="task ">
      <div className="task_date">Thursday, 15 May 2024</div>
     <div className="task_info ">
     <div className="task_time">09:30</div>
     <div className="task_name">
      <h1>UI/UX Designer</h1>
      <p>Practical Task Review</p>
     </div>
     </div>

     <div className="task_info">
     <div className="task_time">09:30</div>
     <div className="task_name">
      <h1>UI/UX Designer</h1>
      <p>Practical Task Review</p>
     </div>
     </div>

     <div className="task_info">
     <div className="task_time">09:30</div>
     <div className="task_name">
      <h1>UI/UX Designer</h1>
      <p>Practical Task Review</p>
     </div>
     </div>
    </div>

    
    </div>
  );
}

export default ScheduleDropdown;



// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

// function ScheduleDropdown() {
//   const [selectedRange, setSelectedRange] = useState('Yesterday');
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleRangeSelect = (range) => {
//     setSelectedRange(range);

//     // Reset custom date range when selecting predefined options
//     setStartDate(null);
//     setEndDate(null);
//   };

//   const handleCustomRangeSelect = () => {
//     setSelectedRange('Custom Range');
//   };

//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Select Date Range: {selectedRange}
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleRangeSelect('Yesterday')}>
//           Yesterday
//         </Dropdown.Item>
//         <Dropdown.Item onClick={() => handleRangeSelect('Last Week')}>
//           Last Week
//         </Dropdown.Item>
//         <Dropdown.Item onClick={() => handleRangeSelect('Last Month')}>
//           Last Month
//         </Dropdown.Item>
//         <Dropdown.Item onClick={handleCustomRangeSelect}>
//           Custom Range
//         </Dropdown.Item>
//         {selectedRange === 'Custom Range' && (
//           <Dropdown.Item>
//             <div>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 selectsStart
//                 startDate={startDate}
//                 endDate={endDate}
//                 placeholderText="From"
//               />
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date) => setEndDate(date)}
//                 selectsEnd
//                 startDate={startDate}
//                 endDate={endDate}
//                 placeholderText="To"
//               />
//             </div>
//           </Dropdown.Item>
//         )}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default ScheduleDropdown;

