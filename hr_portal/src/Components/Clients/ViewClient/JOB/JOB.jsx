
import React from "react";
import Card from "@mui/material/Card";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import { useNavigate } from "react-router-dom";

// import "./poc.css";

function JOB() {
  const navigate = useNavigate();

  const jobData = [
    {
      role_name: "Automation Testing",
      ncr: "3",
      status: "Open",
      poc_name: "Amol Ganjare",
    },
    {
      role_name: "Automation Testing",
      ncr: "3",
      status: "Open",
      poc_name: "Amol Ganjare",
    },
    {
      role_name: "Automation Testing",
      ncr: "3",
      status: "Open",
      poc_name: "Amol Ganjare",
    },
    {
      role_name: "Automation Testing",
      ncr: "3",
      status: "Open",
      poc_name: "Amol Ganjare",
    },
  ];

  return (
    <Card>
      <div className="poc_header">
        <div className="poc_title">
          <BusinessCenterOutlinedIcon />
          <h1>JOB</h1>
        </div>

        <div className="add_poc_btn">
          <button onClick={() => navigate("/add_job")}>
            {" "}
            <AddRoundedIcon /> New
          </button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#EAE5FE" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }} align="center">Position/Role</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">NCR </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">Status</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">POC Name</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobData.map((job) => (
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {job.role_name}
                </TableCell>
                <TableCell align="center">{job.ncr}</TableCell>
                <TableCell align="center">{job.status}</TableCell>
                <TableCell align="center">{job.poc_name}</TableCell>
                <TableCell align="center" sx={{ display: "flex", columnGap: "20px"}} >
                  <button className="edit_poc_btn"  onClick={() => navigate("/view_profile")}><VisibilityOutlinedIcon  sx={{fontSize:"18px"}}/> View</button>
                  <button className="edit_poc_btn" onClick={() => navigate("/edit_job")}><DriveFileRenameOutlineOutlinedIcon  sx={{fontSize:"18px"}}/> Edit</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default JOB;
