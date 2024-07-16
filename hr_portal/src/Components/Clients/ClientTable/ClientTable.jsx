import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";  



import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function ClientTable() {
    const ClientInfo = [
        {
            name: "Thinksolar",
            gst_no: "07AAWFR0503R1ZK",
            payment: "60 days",
            city: "Nagpur",
        },
        {
            name: "Mark9 pte ltd",
            gst_no: "07AAWFR0503R1ZK",
            payment: "40 days",
            city: "Nagpur",
        },
        {
            name: "Bitmapper Integrations",
            gst_no: "07AAWFR0503R1ZK",
            payment: "60 days",
            city: "Nagpur",
        },
        {
            name: "Xcaliber",
            gst_no: "07AAWFR0503R1ZK",
            payment: "30 days",
            city: "Nagpur",
        },
    ];

    const navigate = useNavigate();  
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#EAE5FE" }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>GST No</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>Payment Team</TableCell>
                        <TableCell sx={{ fontWeight: "600" }}>City</TableCell>
                        <TableCell sx={{ fontWeight: "600" }} >
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ClientInfo.map((client) => (
                        <TableRow key={client.name}>
                            <TableCell component="th" scope="row">
                                {client.name}
                            </TableCell>
                            <TableCell>{client.gst_no}</TableCell>
                            <TableCell>{client.payment}</TableCell>
                            <TableCell>{client.city}</TableCell>
                            <TableCell sx={{ display: "flex" , columnGap:"20px"}}   >
                                <div className="poc_button" style={{display:"flex",columnGap:"10px"}}>
                                <button  onClick={() => navigate("/add_poc") }><AddIcon /> POC </button>
                                <button ><AddIcon /> Job Post </button>
                                </div>
            
                                <div
                                    className="icons"
                                    style={{ display: "flex", columnGap: "10px" ,justifyContent:"center",alignItems:"center"}}
                                >
                                    <RemoveRedEyeOutlinedIcon sx={{fontSize:"26px",cursor:"pointer"}}   onClick={() => navigate("/view_client") } />
                                    <DriveFileRenameOutlineOutlinedIcon sx={{fontSize:"26px",cursor:"pointer"}}  onClick={() => navigate("/edit_client") } />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        
    );
}

export default ClientTable;
