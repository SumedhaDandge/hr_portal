import Container from "@mui/material/Container";
import SearchButton from "./SearchButton/SearchButton";
import JobProfile from "./JobProfile/JobProfile";
import ShortListed from "./shortlisted/shortlisted";
function ViewProfile() {
  return (
    <Container sx={{
      backgroundColor:"#FFFFFF",
      border: "1px solid #F4F1FF",
     display:"flex",
     flexDirection:"column",
     rowGap:"20px",

    }}>
      <SearchButton />
      <JobProfile />
      <ShortListed/>
    </Container>
  );
}

export default ViewProfile;
