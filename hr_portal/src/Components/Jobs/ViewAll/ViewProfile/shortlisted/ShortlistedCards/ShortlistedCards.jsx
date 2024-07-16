import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import "../../../ViewAll.css";

function ShortlistedCards() {
  const CandidateInfo = [
    {
      name: "Nishant Raut",
      designation: "Tester",
      gender: "Female",
      email: "Nishat@gmail.com",
      number: "989898989",
      location: "Nagpur",
      preffered: "Pune",
      experience: "14 years",
      relevant: "14 years",
      expected_CTC: "5 L.P.A",
      notice_period: "15 days",
      remark: "None"
    },
    {
      name: "Aarav Singh",
      designation: "Developer",
      gender: "Male",
      email: "aarav@gmail.com",
      number: "9876543210",
      location: "Mumbai",
      preffered: "Bangalore",
      experience: "5 years",
      relevant: "4 years",
      expected_CTC: "12 L.P.A",
      notice_period: "30 days",
      remark: "Available immediately"
    },
    {
      name: "Priya Sharma",
      designation: "Manager",
      gender: "Female",
      email: "priya@gmail.com",
      number: "9123456789",
      location: "Delhi",
      preffered: "Chennai",
      experience: "10 years",
      relevant: "8 years",
      expected_CTC: "18 L.P.A",
      notice_period: "45 days",
      remark: "Requires relocation assistance"
    }
  ];

  return (
    <Container sx={{display:"flex",flexWrap:"wrap" ,columnGap:"2%"}}>
      {CandidateInfo.map((candidate, index) => (
        <Card
          key={index}
          sx={{
            width: "49%",
            backgroundColor: "#FAFFFA",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #D1C7FF",
            padding: "7px",
            marginBottom: "10px"
          }}
        >
          <div className="shortlisted_candidateinfo">
            <div>
              <h1>{candidate.name}</h1>
              <h6>
                {candidate.gender} | {candidate.designation} |{" "}
                {candidate.email}
              </h6>
            </div>
            <p>
              <strong>Location :</strong> {candidate.location} |{" "}
              <strong>Preferred :</strong> {candidate.preffered}
            </p>
            <p>
              <strong>Experience :</strong> {candidate.experience} | Relevant:{" "}
              {candidate.relevant}
            </p>
            <p>
              <strong>Current CTC :</strong> {candidate.expected_CTC} |{" "}
              <strong>Expected CTC :</strong> {candidate.expected_CTC}
            </p>
            <p>
              <strong>Notice Period :</strong> {candidate.notice_period}
            </p>
            <p>
              <strong>Remark :</strong> {candidate.remark}
            </p>
            <div>
              <label htmlFor="">
                Update Current Status With Remarks
              </label>
              <textarea
                name=""
                id=""
                placeholder="Enter remark..."
              ></textarea>
            </div>
          </div>
          <div className="shortlisted_button">
            <label>
              <input type="checkbox" className="custom-checkbox" />
              <span className="checkmark"></span>
            </label>
            <button>View CV</button>
            <button>Update Status</button>
            <select name="" id="">
              <option value="">Shared</option>
              <option value="">JD Sent</option>
            </select>
            <input type="date" name="" id="" />
            <button>View Comments</button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

export default ShortlistedCards;
