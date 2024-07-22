import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import { useState } from "react";
import Login from "./Components/Login.jsx";

import AddCandidate from "./Components/Candidate/CandidateList/AddCandidate.jsx";
import ViewCandidate from "./Components/Candidate/ViewCandidate.jsx";
import SearchCandidate from "./Components/Candidate/SearchCandidate/SearchCandidate.jsx";

import Jobs from "./Components/Jobs/Jobs.jsx";
import AllJobs from "./Components/Jobs/ViewAll/ViewAll.jsx";
import ViewProfile from "./Components/Jobs/ViewAll/ViewProfile/ViewProfile.jsx";
import Clients from "./Components/Clients/Clients.jsx";
import AddClient from "./Components/Clients/AddClient/AddClient.jsx";
import AddPOC from "./Components/Clients/AddPOC/AddPOC.jsx";
import AddJOB from "./Components/Clients/AddJOB/AddJOB.jsx";
import EditJOB from "./Components/Clients/ViewClient/JOB/EditJOB/EditJOB.jsx";
import EditClient from "./Components/Clients/EditClient/EditClient.jsx";
import ViewClient from "./Components/Clients/ViewClient/ViewClient.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/employees" element={<EmployeesTable />} />
            <Route path="/view-employee" element={<ViewEmplyoee/>}/>
            <Route path="/add-new-employee" element={<AddEmployee/>}/>
            <Route path="/candidates" element={<SearchCandidate />} />
            <Route path="/add-new-candidate" element={<AddCandidate/>}/>
            <Route path="/view-candidate" element={<ViewCandidate/>}/>
            <Route path="/clients" element={<Clients />} />
            <Route path="/add_client" element={<AddClient />} />
            <Route path="/add_poc" element={<AddPOC />} />
            <Route path="/edit_poc" element={<EditPOC />} />
            <Route path="/add_job" element={<AddJOB />} />
            <Route path="/edit_client" element={<EditClient />} />
            <Route path="/view_client" element={<ViewClient />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/edit_job" element={<EditJOB />} />
            {/* <Route path="/view_job" element={<ViewJOB />} /> */}
            <Route path="/all_jobs" element={<AllJobs />} />
            <Route path="/view_profile" element={<ViewProfile />} />
            <Route path="/master-data" element={<MasterTables/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
