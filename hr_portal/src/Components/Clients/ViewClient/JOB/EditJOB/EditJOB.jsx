

import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function EditJOB() {
    const navigate = useNavigate();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container sx={{ width: "100%", height: "100vh", display: "flex", marginTop: "40px", alignContent: "center", flexDirection: "column" }}>
            <Card sx={{ width: "100%", backgroundColor: "#FBFAFD", padding: "20px", height: "auto" }}>
                <div className="company_details">
                    <div className="detail_heading">
                        <h1>Job Details <span style={{ color: "red" }}>*</span></h1>
                    </div>
                    <div className="company_form" style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input type="text" placeholder="Post Name* " style={{ flex: 2 }} />
                            <input type="text" placeholder="No. of candidate required*" style={{ flex: 1 }} />
                            <input type="text" placeholder="Experience (years)*" style={{ flex: 1 }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {/* <input type="text" placeholder="First Name*" style={{ flex: 1 }} /> */}
                            {/* <input type="text" placeholder="Last Name*" style={{ flex: 1 }} /> */}
                            <FormControl sx={{ flex: 1 }}>
                                <Select sx={{color: "#A2A1A8CC"  }}
                                    labelId="demo-simple-select-helper-label"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">Status</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ flex: 1 }}>
                                <Select sx={{color: "#A2A1A8CC" }}
                                    labelId="demo-simple-select-helper-label"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">POC Name</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <input type="text" placeholder="Skill Set*" style={{ flex: 2 }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {/* <input type="text" placeholder="First Name*" style={{ flex: 1 }} /> */}
                            <FormControl sx={{ flex: 1, color: "#A2A1A8CC" }}>
                                <Select sx={{color: "#A2A1A8CC" }}
                                    labelId="demo-simple-select-helper-label"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">Job Location*</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            {/* <input type="text" placeholder="Last Name*" style={{ flex: 1 }} /> */}


                            <FormControl sx={{ flex: 1 }}>
                                <Select sx={{color: "#A2A1A8CC" }}
                                    labelId="demo-simple-select-helper-label"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">Notice Period*</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>


                            <input type="text" placeholder="Budget (LPA)*" style={{ flex: 1 }} />
                        </div>
                    </div>
                </div>


                <div className="upload_job_desc" style={{display:"flex",justifyContent:"flex-start",alignItems:"center" ,gap:"10px" }}>
                    <h1 style={{fontSize:"14px",fontWeight:"600"}}>Upload Job Description</h1>
                    <input type="file" />
                </div>



                <div className="form_actions" style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                    <button style={{ marginRight: "10px" }} onClick={() => navigate("/view_client")}>Cancel</button>
                    <button>Add</button>
                </div>
            </Card>
        </Container>
    );
}

export default EditJOB;
