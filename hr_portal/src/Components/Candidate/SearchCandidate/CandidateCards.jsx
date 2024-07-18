import React from 'react';

const CandidateCards = ({ candidate }) => {
  return (
    // <div className="candidate-card">
    //   <p><strong>{candidate.name}</strong> [ {candidate.role} ]</p>
    //   <p>{candidate.email} | {candidate.phone}</p>
    //   <p>Location: {candidate.location}</p>
    //   <p>Experience: {candidate.experience} years | Relevant: {candidate.relevantExperience} years</p>
    //   <p>Current CTC: {candidate.currentCTC} LPA | Expected CTC: {candidate.expectedCTC} LPA</p>
    //   <p>Notice Period: {candidate.noticePeriod} days</p>
    //   <p>Remark: {candidate.remark}</p>
    //   <div>
    //     <button>View CV</button>
    //     <button>Send JD</button>
    //   </div>
    // </div>
    <div className="candidate-card">
    <div className="left-info">
      <span className="info-name">
      <strong>{candidate.name}</strong> [ {candidate.role} ]
      </span>
      <span className="info-highlight">
      {candidate.email} | {candidate.phone}
      </span>
      <span className="info-general candidate-info-name">
        <span>
          <strong>DOB: </strong>04/09/1994
        </span>
        <span>
          <strong>Marital Status: </strong>Married
        </span>
        <span>
          <strong>Nationality: </strong>Indian
        </span>
        <span>
          <strong>Address: </strong> Nagpur, Laxmi Nagar- Near Diksha
          Bhoomi (Area) - 441802
        </span>
      </span>
    </div>
    <div className="righ-info candidate-rightInfo">
      <button className="info-smallBtn candidateCard-btn">View CV</button>
      <button className="info-smallBtn candidateCard-btn">Send JD</button>
    </div>
  </div>
  );
};

export default CandidateCards;
