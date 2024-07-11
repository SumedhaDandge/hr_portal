import ActiveJobs from './ActiveJobs/ActiveJobs';
import ClosedJobs from './ClosedJobs/ClosedJobs';
import DraftJobs from './DraftJobs/DraftJobs';
import Serach from './Search/Search';
import "./jobs.css";

function Jobs() {
  return (
    <div className="Jobs container-fluid">
      <div className="container jobs_container">
      <Serach/>
        <ActiveJobs />
        <ClosedJobs />
        <DraftJobs />
      </div>
    </div>
  );
}
export default Jobs;
