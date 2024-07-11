import React from 'react';
import '../JobStatus.css';
import TotalJobs from './TotalJobs/TotalJobs';
import OpenJobs from './OpenJobs/OpenJobs';

function JobStatusPieChart() {
 

  return (
    <div className="job_status  ">
      <TotalJobs/>
      <OpenJobs/>
    </div>
   
  );
}



export default JobStatusPieChart;
