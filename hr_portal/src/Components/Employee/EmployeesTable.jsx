// import React, { useEffect, useState } from "react";
import "./employeeTable.css";
import trashIcon from "../../assets/trashicon.svg";
import showIcon from "../../assets/view.svg";
import editIcon from "../../assets/edit.svg";
import Avatar from '@mui/material/Avatar';
import ContentHeader from "../contentHeader.jsx";
import { useNavigate } from "react-router-dom";  


const EmployeesTable = () => {
  const navigate = useNavigate();  
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         const data = await fetch('/api/employees'); // Replace with your API endpoint
  //         const result = await data.json();
  //         setEmployees(result);
  //     };

  //     fetchData();
  // }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Permanent":
        return { color: "#7152F3", backgroundColor: "#F4F1FD" }; // Light purple
      case "On Leave":
        return { color: "#F91515", backgroundColor: "#FBE9E9" }; // Light red
      default:
        return {};
    }
  };
  
  const addEmployee = ()=>{
    navigate("/add-new-employee");
  }

  const filterEmployee = ()=>{
    alert("filter");
  }


  return (
    <div className="empTable-container">
      
        <ContentHeader buttonText="Add New Employee" onButtonClick={addEmployee} onFilterClick={filterEmployee}/>
        {/* {<Filter />} */}     

      <table className="employee-table">
        <thead className="emp-table-headRow  ">
          <tr>
            <th className="emp-table-head">Employee Name</th>
            <th className="emp-table-head">Employee ID</th>
            <th className="emp-table-head">Department</th>
            <th className="emp-table-head">Designation</th>
            <th className="emp-table-head">Type</th>
            <th className="emp-table-head">Status</th>
            <th className="emp-table-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {employees.map((employee) => ( ))} */}
          <tr className="emp-table-row">
            <td className="emp-table-data emp-name">
            <Avatar alt="Manasi" src="/path/to/manasi.jpg" /> Manasi
            </td>
            <td className="emp-table-data">345267133</td>
            <td className="emp-table-data">HR</td>
            <td className="emp-table-data">HR Executive</td>
            <td className="emp-table-data">Work from home</td>
            <td className="emp-table-data emp-status">
              <span style={getStatusStyle("On Leave")}>On Leave</span>
            </td>
            <td className="emp-table-data emp-action">
              <span> <button onClick={() => navigate("/view-employee") }>
                <img src={showIcon} alt="" />
                </button>
              </span>
              <span>
                <img src={editIcon} alt="" />
              </span>
              <span>
                <img src={trashIcon} alt="" />
              </span>
            </td>
          </tr>
          <tr className="emp-table-row">
            <td className="emp-table-data emp-name">
            <Avatar alt="Jayshri" src="/path/to/Jayshri.jpg" /> Jayshri
            </td>
            <td className="emp-table-data">345267134</td>
            <td className="emp-table-data">Design</td>
            <td className="emp-table-data">UI/UX Designer</td>
            <td className="emp-table-data">office</td>
            <td className="emp-table-data emp-status">
              <span style={getStatusStyle("Permanent")}>Permanent</span>
            </td>
            <td className="emp-table-data emp-action">
              <span>
                <img src={showIcon} alt="" />
              </span>
              <span>
                <img src={editIcon} alt="" />
              </span>
              <span>
                <img src={trashIcon} alt="" />
              </span>
            </td>
          </tr>
          <tr className="emp-table-row">
            <td className="emp-table-data emp-name">
            <Avatar alt="Sumedhaa" src="/path/to/Sumedhaa.jpg" /> Sumedha
            </td>
            <td className="emp-table-data">345267135</td>
            <td className="emp-table-data">Developer</td>
            <td className="emp-table-data">React Developer</td>
            <td className="emp-table-data">office</td>
            <td className="emp-table-data emp-status">
              <span style={getStatusStyle("Permanent")}>Permanent</span>
            </td>
            <td className="emp-table-data emp-action">
              <span>
                <img src={showIcon} alt="" />
              </span>
              <span>
                <img src={editIcon} alt="" />
              </span>
              <span>
                <img src={trashIcon} alt="" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
