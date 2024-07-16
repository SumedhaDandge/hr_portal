import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TuneIcon from '@mui/icons-material/Tune';
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import "../jobs.css";

function Search() {
  return (
    <div className="search_container">
      <div className="search_box">
        <SearchIcon className="search_icon" />
        <InputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          className="search_input"
        />
      </div>
     <div className="filter_button">
     <TuneIcon className="text-dark " />
      <Button  className="text-dark">
        Filter
      </Button>
     </div>
    </div>
  );
}

export default Search;
