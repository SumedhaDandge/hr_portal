import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";  
import "../Clients.css";






function EditClient() {
    const navigate = useNavigate(); 
    return (
        <Container sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center",alignItems:"center" }}>
        <Card sx={{ width: "100%", height: "80vh",backgroundColor: "#FBFAFD", padding: "20px" ,alignContent:"center"}}>
            <div className="company_details">
                <div className="detail_heading">
                    <h1>Company Details</h1>
                </div>
                <div className="company_form">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <input type="text" placeholder="Company Name*" style={{ flex: 1, marginRight: "10px" }} />
                        <input type="text" placeholder="Address*" style={{ flex: 1 }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                        <input type="text" placeholder="GST Number" style={{ flex: 1, marginRight: "10px" }} />
                        <input type="text" placeholder="Payment Term (in days)" style={{ flex: 1, marginRight: "10px" }} />
                        <input type="text" placeholder="City*" style={{ flex: 1 }} />
                    </div>
                </div>
            </div>
            <div className="assigned_employee" style={{ marginTop: "20px" }}>
                <div className="detail_heading">
                    <h1>Assign Employee <span style={{ color: "red" }}>*</span></h1>
                </div>
                <div className="employee_form" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <input type="text" placeholder="Select Assign Employee" style={{ flex: 1 }} />
                </div>
            </div>
        

            <div className="upload_agreement">
                <div className="agreement_form" >
                    <h1>Upload Agreement </h1>
                    <input type="file" name="" id="" />
                </div>
            </div>


            <div className="form_actions" style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                <button style={{ marginRight: "10px" }} onClick={() => navigate("/clients")} >Cancel</button>
                <button>Add</button>
            </div>
        </Card>
    </Container>
    );
    }
    
    
    export default EditClient;


    