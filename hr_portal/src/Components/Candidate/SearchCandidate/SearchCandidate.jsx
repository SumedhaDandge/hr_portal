import CandidateSearchbar from "./CandidateSearchbar";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const SearchCandidate = () => {
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
      </Container>
    </>
  );
};

export default SearchCandidate;
