

import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import TuneIcon from '@mui/icons-material/Tune';

import '../poc.css';


function EditPOC() {
    const navigate = useNavigate();

    return (
        <Container sx={{  width: "100%", height: "100vh", display: "flex",marginTop:"40px", alignContent: "center" ,flexDirection:"column"}}>


            
            <Card sx={{ width: "100%", backgroundColor: "#FBFAFD", padding: "20px", height: "auto",marginBottom:"50px",flexDirection:"column" }}>
            <div className="edit_filter_button">
                <button><TuneIcon/> Filter</button>
            </div>

                <div className="company_details">
                    <div className="detail_heading">
                        <h1>POC Details <span style={{ color: "red" }}>*</span></h1>
                    </div>
                    <div className="company_form">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input type="text" placeholder="First Name*" style={{ flex: 1, marginRight: "10px" }} />
                            <input type="text" placeholder="Last Name*" style={{ flex: 1 }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input type="number" placeholder="Mobile No.*" style={{ flex: 1, marginRight: "10px" }} />
                            <input type="email" placeholder="Email Id*" style={{ flex: 1 }} />
                        </div>
                        <input type="text" placeholder="Designation*" style={{ flex: 1, width: "49%" }} />
                    </div>
                </div>

             

                <div className="form_actions" style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                    <button style={{ marginRight: "10px" }} onClick={() => navigate("/view_client")}>Cancel</button>
                    <button>Add</button>
                </div>
            </Card>
        </Container>
    );
}

export default EditPOC;
