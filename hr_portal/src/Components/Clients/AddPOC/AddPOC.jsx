import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(28px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#2196F3',
                opacity: 1,
                border: 0,
                
            },
            '& .MuiSwitch-thumb:before': {
                content: '"ON"',
                display: 'block',
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                fontSize: 12,
                fontWeight: 'bold',
                lineHeight: '34px',
                textAlign: 'center',
                color: 'white',
            }
        },
        '&:not(.Mui-checked) .MuiSwitch-thumb:before': {
            content: '"OFF"',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            fontSize: 12,
            fontWeight: 'bold',
            lineHeight: '34px',
            textAlign: 'center',
            color: 'white',
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 30,
        height: 30,
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="%23ffffff" d="M7 12l5 5V7z"/></svg>')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 34 / 2,
        backgroundColor: '#E9E9EA',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

function AddPOC() {
    const navigate = useNavigate();

    return (
        <Container sx={{ width: "100%", height: "100vh", display: "flex",marginTop:"40px", alignContent: "center" ,flexDirection:"column"}}>
            <Card sx={{ width: "100%", backgroundColor: "#FBFAFD", padding: "20px", height: "auto"}}>
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

                <div className="main_contact" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                   
                    <h1 style={{fontSize:"16px",color:"#000000",fontWeight:"600"}}> <FormControlLabel
                        control={<Checkbox sx={{ color: pink[800], '& .MuiSvgIcon-root': { fontSize: 28, color: pink[600] } }} />}
                    />       Main Contact</h1>
                </div>

                <div className="email_cc" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'  }}>
                    
                    <h1 style={{fontSize:"16px",color:"#000000",fontWeight:"600"}}><FormControlLabel
                        control={<IOSSwitch  defaultChecked />}
                    /> Email CC include</h1>
                </div>

                <div className="form_actions" style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                    <button style={{ marginRight: "10px" }} onClick={() => navigate("/clients")}>Cancel</button>
                    <button>Add</button>
                </div>
            </Card>
        </Container>
    );
}

export default AddPOC;
