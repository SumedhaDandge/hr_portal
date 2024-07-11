import React from 'react';
import './JobStatus.css';
import JobStatusButton from './JobStatusButton/JobStatusButton';
import JobStatusPieChart from './JobStatusPieChart/JobStatusPieChart';

function JobStatus() {
  return (
    <div className="job_status_container ">
        <JobStatusButton/>
        <JobStatusPieChart/>
    </div>
  );
}

export default JobStatus;
