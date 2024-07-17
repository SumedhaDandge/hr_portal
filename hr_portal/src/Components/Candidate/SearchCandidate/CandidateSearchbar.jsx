import React from "react";
import "./searchCandidate.css";

const CandidateSearchbar = () => {
  return (
    <div className="candidateSearch-bar">
      <div className="searchCandidate-col">
        <span className="search-section">
          <label>
            <strong>Candidate Name:</strong>
          </label>
          <input type="text" placeholder="Candidate Name" />
        </span>
        <span className="search-section">
          <label>
            <strong>Experience (Years)</strong>
          </label>
          <input type="number" min="0" />
          <input type="number" min="0" />
        </span>
      </div>
      <div className="searchCandidate-col">
        <span className="search-section">
          <label>
            <strong>Job Role/Position:</strong>
          </label>
          <select>
            <option value=""></option>
          </select>
        </span>
        <span className="search-section">
        <label>
            <strong>CTC (LPA):</strong>
          </label>
          <input type="number" min="0" />
          <input type="number" min="0" />
        </span>
      </div>
      <div className="searchCandidate-col">
        <span className="search-section">
          <label>
            <strong>Skill Set:</strong>
          </label>
          <select>
            <option value="">Skill Set</option>
          </select>
        </span>
        <span className="search-section">
        <label>
            <strong>Notice Period:</strong>
          </label>
          <select>
            <option value="">Notice Period</option>
          </select>
        </span>
        <span className="search-section">
          <button className="info-black-smallBtn">Apply</button>
        </span>
      </div>

      {/* 

      

     
     
     

      */}

      {/* <div>
       
      </div> */}
    </div>
  );
};

export default CandidateSearchbar;
