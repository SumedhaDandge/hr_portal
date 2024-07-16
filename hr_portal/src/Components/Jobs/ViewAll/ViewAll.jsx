import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ViewProfile from './ViewProfile/ViewProfile'
import { Link } from "react-router-dom";
import "../jobs.css";

function AllJobs() {
  const jobs = [
    {
      title: "Automation testing",
      company: "Thinksolar",
      email: "Parag@vitric.in",
      phone: "7709703563",
      profiles: {
        required: 3,
        shared: 2,
        cleared: 2,
        shortlisted: 3,
        screened: 2,
        joined: 2,
      },
    },
    {
      title: "Testing",
      company: "Thinksolar",
      email: "Parag@vitric.in",
      phone: "7709703563",
      profiles: {
        required: 3,
        shared: 2,
        cleared: 2,
        shortlisted: 3,
        screened: 2,
        joined: 2,
      },
    },
    {
      title: "Data science",
      company: "Xcaliber",
      email: "Parag@vitric.in",
      phone: "7709703563",
      profiles: {
        required: 3,
        shared: 2,
        cleared: 2,
        shortlisted: 3,
        screened: 2,
        joined: 2,
      },
    },
  ];

  return (
    <Container
      className="all_job_container"
      sx={{ display: "flex", flexWrap: "wrap", columnGap: "4%", rowGap: "20px" }}
    >
      {jobs.map((job, index) => (
        <Card key={index} sx={{ display: "flex", width: "48%" ,alignContent:"center",justifyContent:"space-between",backgroundColor:"#F4F1FD"}} className="alljobs_card">
          <CardContent sx={{ width: "48%",padding:"20px 50px"}} className="Card_job">
            <h1>{job.title}</h1>
            <h6>{job.company}</h6>
            <p><strong>Email :</strong> {job.email}</p>
            <p><strong>Phone :</strong> {job.phone}</p>
            <Link className="card_job_btn" to="/view_profile">View Profiles</Link>
          </CardContent>
          <CardContent className="card_contain" sx={{ width: "48%",padding:"30px"}}>
            <div className="card_contain_details">
            <p>Required Candidate :</p>
            <h1>{job.profiles.required}</h1>
            </div>
            <div className="card_contain_details">
            <p>Profile Shared :</p>
            <h1>{job.profiles.cleared}</h1>
            </div>
            <div className="card_contain_details">
            <p>Profile Shortlisted:</p>
            <h1>{job.profiles.shortlisted}</h1>
            </div>
            <div className="card_contain_details">
            <p>Profile Screened  :</p>
            <h1>{job.profiles.screened}</h1>
            </div>
            <div className="card_contain_details">
            <p>Selected/joined  :</p>
            <h1>{job.profiles.joined}</h1>
            </div>
            {/* <p>Required Candidate : {job.profiles.required}</p>
            <p>Profile Shared : {job.profiles.shared}</p>
            <p>Interview Cleared : {job.profiles.cleared}</p>
            <p>Profile Shortlisted : {job.profiles.shortlisted}</p>
            <p>Profile Screened : {job.profiles.screened}</p>
            <p>Selected/joined : {job.profiles.joined}</p> */}
          </CardContent>
        </Card>
      ))}
    </Container>

  
  );
}

export default AllJobs;
