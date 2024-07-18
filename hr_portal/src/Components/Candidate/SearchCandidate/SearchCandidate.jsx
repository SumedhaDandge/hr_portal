import CandidateSearchbar from "./CandidateSearchbar";
import Container from "@mui/material/Container";
import CandidateCards from "./CandidateCards";
import './searchCandidate.css';
import { useNavigate } from "react-router-dom";

const SearchCandidate = () => {

  const candidatesData = [
    {
      name: 'Nishant Raut',
      role: 'Tester',
      email: 'Nishant@gmail.com',
      phone: '989898989',
      location: 'Preferred',
      experience: 10,
      relevantExperience: 4,
      currentCTC: 10,
      expectedCTC: 5,
      noticePeriod: 15,
      remark: 'None',
    },
    {
      name: 'Nishant Raut',
      role: 'Tester',
      email: 'Nishant@gmail.com',
      phone: '989898989',
      location: 'Preferred',
      experience: 10,
      relevantExperience: 4,
      currentCTC: 10,
      expectedCTC: 5,
      noticePeriod: 15,
      remark: 'None',
    },
    // Add more candidates as needed
  ];

  return (
    <>
      <Container
        sx={{
          width: "100%",
          background: "#FFFFFF",
          height: "100vh",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "center",
          rowGap: "30px",
          overflowY: "auto",
        }}
      >
        <CandidateSearchbar />
        <div className="candidate-list">
        {candidatesData.map((candidate, index) => (
          <CandidateCards key={index} candidate={candidate} />
        ))}
      </div>
        {/* <CandidateCards/> */}
      </Container>
    </>
  );
};

export default SearchCandidate;
