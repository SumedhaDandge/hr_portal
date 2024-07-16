
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login.jsx";
import EmployeesTable from "./Components/EmployeesTable.jsx";
import AddCandidate from "./Components/Candidate/AddCandidate.jsx";
import ClientList from "./Components/ClientsComponent/ClientList.jsx";
import ClientView from "./Components/ClientsComponent/ClientView.jsx";
import Jobs from "./Components/Jobs/Jobs.jsx";
import AllJobs from "./Components/Jobs/ViewAll/ViewAll.jsx";
import ViewProfile from "./Components/Jobs/ViewAll/ViewProfile/ViewProfile.jsx";
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
            <Route path="/candidates" element={<AddCandidate />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/all_jobs" element={<AllJobs />} />
            <Route path="/view_profile" element={<ViewProfile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import Sidebar from "./Components/Sidebar/sidebar";
// import Navbar from "./Components/Navbar/Navbar";
// import Dashboard from './Components/Dashboard/Dashboard';
// import { useState } from 'react'
// import './App.css'
// import Login from './Components/Login.jsx';
// import EmployeesTable from './Components/EmployeesTable.jsx';
// import AddCandidate from './Components/AddCandidate.jsx';
// import ClientList from './Components/ClientList.jsx';
// import ClientView from './Components/ClientView.jsx';

// import './App.css';

// function App() {
//   return (
//     <>
//        <div className="app-container">
//         <Sidebar />
//         <div className="main-content">
//         <Navbar />
//         <Dashboard />
//       </div>

//     </div>
//     {/* <EmployeesTable/> */}
//     </>
//   );
// }

// export default App;
