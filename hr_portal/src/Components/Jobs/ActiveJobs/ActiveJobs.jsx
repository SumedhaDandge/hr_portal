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

function ActiveJobs() {
  const jobs = [
    {
      title: "UI/UX Designer",
      company: "Think Solar",
      location: "Banglore,India",
      salary: "3600/Month",
      category: "Design",
    },
    {
      title: "Testing",
      company: "Mark9 pte ltd",
      location: "Mumbai, India",
      salary: "15,000/Month",
      category: "Design",
    },
    {
      title: "Automation Testing",
      company: "Xcaliber",
      location: "Pune, India",
      salary: "20,000/Month",
      category: "Developer",
    },
    {
      title: "React JS",
      company: "Xcaliber",
      location: "Pune, India",
      salary: "20,000/Month",
      category: "Developer",
    },
  ];

  return (
    <Container className="active_jobs">
      <h1>
        <CircleIcon color="success" sx={{ fontSize: 15 }} /> Active Jobs
      </h1>
      <div className="jobs_card_container">
        <div className="job_cards">
          {jobs.map((job, index) => (
            <Card className="Cards" key={index}>
              <CardContent className="card_components">
                <div className="card_heading">
                  <BusinessCenterOutlinedIcon className="bg-success color-light icon" />
                  <div className="job_name">
                    <h6>{job.title}</h6>
                    <p>{job.company}</p>
                  </div>
                </div>
                <div className="card_body">
                  <div className="job_info">
                    <button>{job.category}</button>
                    <button>Full Time</button>
                    <p>Remote</p>
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

export default ActiveJobs;

// import Container from "@mui/material/Container";
// import CircleIcon from "@mui/icons-material/Circle";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

// import "../jobs.css";

// function ActiveJobs() {
//   return (
//     <Container className="active_jobs">
//       <h1>
//         {" "}
//         <CircleIcon color="success" sx={{ fontSize: 15 }} /> Active Jobs
//       </h1>
//       <div className="job_cards">
//         <Card className="Cards">
//           <CardContent>
//             <div className="card_header">
//               <BusinessCenterOutlinedIcon className="bg-success color-light icon" />
//               <div className="job_name">
//                 <h1>UI/UX Designer</h1>
//                 <p>ThinkSolar</p>
//               </div>
//             </div>

//             <div className="card_body"></div>
//           </CardContent>
//         </Card>
//       </div>
//     </Container>
//   );
// }
// export default ActiveJobs;
