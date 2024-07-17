
import React from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";  
import CandidateTable from "./CandidateList/CandidateTable.jsx";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import ContentHeader from "../contentHeader.jsx";

// import "./Clients.css";


function Candidate() {
  const navigate = useNavigate();  

  const addCandidate = ()=>{
    navigate("/add-new-candidate");    
  }

  const filterEmployee = ()=>{
    alert("filter");
  }

  return (
    <Container
      sx={{
        width: "100%",
        background: "#FFFFFF",
        height: "100vh",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        rowGap: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
        }}
      >
        <ContentHeader buttonText="Add Candidate" onButtonClick={addCandidate} onFilterClick={filterEmployee}/>
        {/* <div className="client_search_button">
          <div className="client_search_container">
            <SearchIcon className="search_icon" />
            <InputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              className="search_input"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              columnGap: "20px",
            }}
          >
            <div className="add_client_button">
              <button
                style={{
                  backgroundColor: "#7152F3",
                  padding: "10px 20px",
                  color: "#fff",
                  outline: "none",
                  borderRadius: "10px",
                }}
                onClick={() => navigate("/add_client")} 
              >
                <AddCircleOutlineIcon sx={{ marginRight: "6px" }} />
                Add Clients
              </button>
            </div>

            <div className="client_search_filter_button">
              <TuneIcon className="text-dark " />
              <Button className="text-dark">Filter</Button>
            </div>
          </div>
        </div> */}

        <CandidateTable />
      </div>

      {/* Pagination */}
      <div style={{ marginBottom: "20px" }}>
        <div
          className="border"
          style={{ border: "2px solid #D1C7FF", marginBottom: "10px" }}
        ></div>
        <Pagination
          count={10}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        />
      </div>
    </Container>
  );
}

export default Candidate;
