import React from "react";
import Container from "@mui/material/Container";
import CircleIcon from "@mui/icons-material/Circle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import "../jobs.css";

function DraftJobs() {
  const jobs = [
    {
        title: "UI/UX Designer",
        company: "Xcaliber",
        location: "Pune, India",
        salary: "1500/Month",
        category: "Design",
        remort: "Remote",
      },
    {
        title: "Sr. UX Researcher",
        company: "Think Solar",
        location: "Nagpur, India",
        salary: "1500/Month",
        category: "Design",
      },
  
    {
        title: "BDM",
        company: "Mark9 pte ltd",
        location: "Pune, India",
        salary: "1000/Month",
        category: "Sales",
      },
  
  ];
  return (
    <Container className="active_jobs">
      <h1>
        <CircleIcon color="dark" sx={{ fontSize: 15 }} /> Draft Jobs
      </h1>
      <div className="jobs_card_container">

        <div className="job_cards"> 
        {jobs.map((job, index) => (
          <Card className="Cards" key={index}>
            <CardContent className="card_components">
              <div className="card_heading">
                <BusinessCenterOutlinedIcon className="bg-dark color-light icon" />
                <div className="job_name">
                  <h6>{job.title}</h6>
                  <p className="text-dark ">{job.company}</p>
                </div>
              </div>
              <div className="card_body">
                <div className="job_info">
                  <button>{job.category}</button>
                  <button>Full Time</button>
                  <p>{job.remort}</p>
                </div>
              </div>
              <div className="card_footer">
                <p>
                  {" "}
                  <PlaceOutlinedIcon sx={{ fontSize: 16 }} />
                  {job.location}
                </p>
                <p>
                  <CurrencyRupeeIcon sx={{ fontSize: 16 }} />
                  {job.salary}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
        </div>
        
        <div className="view_all">
        <Link className="view_link" to="/all_jobs">View All</Link>
        </div>
      </div>
    </Container>
  );
}
export default DraftJobs;
