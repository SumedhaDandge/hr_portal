import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import POC from "./POC/POC";
import JOB from "./JOB/JOB";

import { useNavigate } from "react-router-dom";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

function ViewClient() {
    const navigate = useNavigate();  
    return (
        <Container className="sub_container">
            <Card className="client_profile_card">
                <div className="heading_container">
                    <div className="heding_title">
                        <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.5 23.95V28M14.5 28H10.45M14.5 28H18.55M17.2 9.1C17.2 7.60883 15.9912 6.4 14.5 6.4C13.0088 6.4 11.8 7.60883 11.8 9.1C11.8 10.5912 13.0088 11.8 14.5 11.8C15.9912 11.8 17.2 10.5912 17.2 9.1ZM6.4 23.95H22.6C25.5823 23.95 28 21.5323 28 18.55V6.4C28 3.41766 25.5823 1 22.6 1H6.4C3.41766 1 1 3.41766 1 6.4V18.55C1 21.5323 3.41766 23.95 6.4 23.95ZM11.125 18.55H17.875C18.9934 18.55 19.9 17.6434 19.9 16.525C19.9 15.4066 18.9934 14.5 17.875 14.5H11.125C10.0066 14.5 9.1 15.4066 9.1 16.525C9.1 17.6434 10.0066 18.55 11.125 18.55Z"
                                stroke="white"
                                strokeWidth="2"
                                stroke-linecap="round"
                            />
                        </svg>
                        <h1>Client Profile</h1>
                    </div>

                    <div className="details_button">
                        <button>
                            {" "}
                            <DriveFileRenameOutlineOutlinedIcon /> Details
                        </button>
                    </div>
                </div>

                <div className="client_profile_details">
                    <div className="client_contact_info">
                        <h1>Thinksolar</h1>
                        <div>
                        <p><strong>Address :</strong> Nagpur, (Area..) (441802) - MH</p>
                        <p><strong>City :</strong> Nagpur</p>
                        <p><strong>Gst No. :</strong> 07AAWFR0503R1ZK</p>
                        </div>
                        <div>
                            <button>View Agreement</button>
                            <button>Payment Term : 60</button>
                        </div>
                    </div>

                    <div className="client_assign_emp">
                        <h1>Assigned Employee: </h1>
                        <div>
                            <button>Manasi</button>
                            <button>Mansai</button>
                            <button>Mansai</button>
                            <button>Mansai</button>
                        </div>
                    </div>
                </div>
            </Card>


            <POC/>

            <JOB/>

            
        </Container>
    );
}

export default ViewClient;
// onClick={() => navigate("/add_client")} 