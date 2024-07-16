import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TuneIcon from '@mui/icons-material/Tune';
import "../../ViewAll.css";

function SearchButton() {
  return (
    <div className="viewprofile_searchbtn">
      <div className="viewprofile_search_container">
        <SearchIcon className="search_icon" />
        <InputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          className="search_input"
        />
      </div>
      <button className="viewprofile_filterbtn"
      ><TuneIcon sx={{marginRight:"8px"}}/> Filter</button>
    </div>
  );
}

export default SearchButton;
