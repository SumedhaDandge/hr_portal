import ActiveJobs from "./ActiveJobs/ActiveJobs";
import ClosedJobs from "./ClosedJobs/ClosedJobs";
import DraftJobs from "./DraftJobs/DraftJobs";
import Serach from "./Search/Search";
import Container from "@mui/material/Container";
import "./jobs.css";

function Jobs() {
  return (
    <Container className="jobs" >
      <Serach />
      <ActiveJobs />
      <ClosedJobs />
      <DraftJobs />
    </Container>
  );
}
export default Jobs;
