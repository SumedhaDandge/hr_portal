import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import showIcon from "../../../assets/view.svg";
import editIcon from "../../../assets/edit.svg";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";  



import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function CandidateTable() {
    const CandidateInfo = [
        {
            name: "Amol Ganjare",
            email: "Amol@vitric.in",
            currentLocation: "Nagpur",
            experience: "5 Years",
            ctc: "5 LPA",
            skillset: "React, HTML, Python, Css,",
        },
        {
            name: "Amol Ganjare",
            email: "Amol@vitric.in",
            currentLocation: "Nagpur",
            experience: "5 Years",
            ctc: "5 LPA",
            skillset: "React, HTML, Python, Css,",
        },
        {
            name: "Amol Ganjare",
            email: "Amol@vitric.in",
            currentLocation: "Nagpur",
            experience: "5 Years",
            ctc: "5 LPA",
            skillset: "React, HTML, Python, Css,",
        },
        {
            name: "Amol Ganjare",
            email: "Amol@vitric.in",
            currentLocation: "Nagpur",
            experience: "5 Years",
            ctc: "5 LPA",
            skillset: "React, HTML, Python, Css,",
        },
    ];

    const navigate = useNavigate();  
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#EAE5FE" }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>Email</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>Current Location</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>Experience (yrs)</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>CTC</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>Skill Set</TableCell>
                        <TableCell sx={{ fontWeight: "600" }} >
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {CandidateInfo.map((candidate) => (
                        <TableRow key={candidate.name}>
                            <TableCell component="th" scope="row">
                                {candidate.name}
                            </TableCell>
                            <TableCell>{candidate.email}</TableCell>
                            <TableCell>{candidate.currentLocation}</TableCell>
                            <TableCell>{candidate.experience}</TableCell>
                            <TableCell>{candidate.ctc}</TableCell>
                            <TableCell>{candidate.skillset}</TableCell>
                            <TableCell sx={{ display: "flex" , columnGap:"20px"}}   >                                
            
                                <div
                                    className="icons"
                                    style={{ display: "flex", columnGap: "10px" ,justifyContent:"center",alignItems:"center"}}
                                >
                                    <button onClick={() => navigate("/view-candidate") }>
                <img src={showIcon} alt="" />
                </button>
              <span>
                <img src={editIcon} alt="" />
              </span>
                                    {/* <RemoveRedEyeOutlinedIcon sx={{fontSize:"26px",cursor:"pointer"}}   onClick={() => navigate("/view_client") } />
                                    <DriveFileRenameOutlineOutlinedIcon sx={{fontSize:"26px",cursor:"pointer"}}  onClick={() => navigate("/edit_client") } /> */}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        
    );
}

export default CandidateTable;
