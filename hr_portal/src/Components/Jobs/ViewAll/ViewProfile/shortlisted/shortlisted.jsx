
import React from 'react';
import Container from "@mui/material/Container";
import ShortlistedBtn from './ShortlistedBtn/ShortlistedBtn';
import ShortlistedCards from "./ShortlistedCards/ShortlistedCards";

function ShortListed() {
  return (
  
    <Container sx={{ backgroundColor: "#F4F1FD", width: "100%", padding: "20px",marginBottom:"20px" }}>
      <ShortlistedBtn />
      <ShortlistedCards/>
      </Container>
  );
}

export default ShortListed;
