import React from "react";
import Card from "@mui/material/Card";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import { useNavigate } from "react-router-dom";

import "./poc.css";

function POC() {
  const navigate = useNavigate();

  const pocData = [
    {
      name: "Amol Ganjare",
      mob_no: "7709703563",
      email: "amol@vitric.in",
      designation: "Manager",
    },
    {
      name: "Amol Ganjare",
      mob_no: "7709703563",
      email: "amol@vitric.in",
      designation: "Manager",
    },
    {
      name: "Amol Ganjare",
      mob_no: "7709703563",
      email: "amol@vitric.in",
      designation: "Manager",
    },
    {
      name: "Amol Ganjare",
      mob_no: "7709703563",
      email: "amol@vitric.in",
      designation: "Manager",
    },
  ];

  return (
    <Card>
      <div className="poc_header">
        <div className="poc_title">
          <HeadsetMicOutlinedIcon />
          <h1>POC</h1>
        </div>

        <div className="add_poc_btn">
          <button onClick={() => navigate("/add_poc")}>
            {" "}
            <AddRoundedIcon /> New
          </button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#EAE5FE" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }} align="center">Name</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">Mobile No.</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">Email</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">Designation</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pocData.map((poc) => (
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {poc.name}
                </TableCell>
                <TableCell align="center">{poc.mob_no}</TableCell>
                <TableCell align="center">{poc.email}</TableCell>
                <TableCell align="center">{poc.designation}</TableCell>
                <TableCell align="left" sx={{ display: "flex", columnGap: "20px" }} >
                  <button    onClick={() => navigate("/edit_poc")} className="edit_poc_btn"><DriveFileRenameOutlineOutlinedIcon  sx={{fontSize:"18px"}}    /> Edit</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default POC;
