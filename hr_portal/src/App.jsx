import Sidebar from "./Components/Sidebar/sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import EmployeesTable from "./Components/EmployeesTable.jsx";
import AddCandidate from "./Components/Candidate/AddCandidate.jsx";
import ClientList from "./Components/ClientsComponent/ClientList.jsx";
import ClientView from "./Components/ClientsComponent/ClientView.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        {/* <Sidebar />
        <div className="main-content">
        <Navbar />
        <Dashboard />
      </div> */}

        <Login />
      </div>
    </>
  );
}

export default App;
