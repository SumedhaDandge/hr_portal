import showIcon from "../../assets/view.svg";
import editIcon from "../../assets/edit.svg";
import ContentHeader from "../contentHeader.jsx";
import './clientList.css';
import { useState } from "react";


const ClientList = () => {

    const [isVisible, setIsVisible] = useState(false);

  const addClient = () => {
    alert("button clicked");
  };

  const filterClient = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="empTable-container">
      <ContentHeader buttonText="Add New Client" onButtonClick={addClient} onFilterClick={filterClient} />
      {isVisible && (
        <div id="filter-options" className="filter-options">
          {/* <p>Filter</p> */}
          <ul>
            <li className="filteredOptionLi">All Clients</li>
            <li className="filteredOptionLi">All POC</li>
            <li className="filteredOptionLi">All Job Posts</li>
          </ul>
        </div>
      )}
      {/* {<Filter />} */}

      <table className="employee-table">
        <thead className="emp-table-headRow">
          <tr>
            <th className="emp-table-head">Name</th>
            <th className="emp-table-head">GST No.</th>
            <th className="emp-table-head">Payment Team</th>
            <th className="emp-table-head" style={{width: "200px"}}>City</th>
            <th className="emp-table-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {employees.map((employee) => ( ))} */}
          <tr className="emp-table-row">
            <td className="emp-table-data">Mark9 pte ltd</td>
            <td className="emp-table-data">07AAWFR0503R1ZK</td>
            <td className="emp-table-data">60 days</td>
            <td className="emp-table-data">Nagpur</td>
            <td className="emp-table-data emp-action">
              <span className="twoBtnSpan">
                <button className="purpleBtn">+ POC</button>
                <button className="purpleBtn">+ Job Post</button>
              </span>
              <span>
                <img src={showIcon} alt="" />
              </span>
              <span>
                <img src={editIcon} alt="" />
              </span>
            </td>
          </tr>
          <tr className="emp-table-row">
            <td className="emp-table-data">Xcaliber</td>
            <td className="emp-table-data">07AAWFR0503R1ZK</td>
            <td className="emp-table-data">60 days</td>
            <td className="emp-table-data">Nagpur</td>
            <td className="emp-table-data emp-action">
            <span className="twoBtnSpan">
                <button className="purpleBtn">+ POC</button>
                <button className="purpleBtn">+ Job Post</button>
              </span>
              <span>
                <img src={showIcon} alt="" />
              </span>
              <span>
                <img src={editIcon} alt="" />
              </span>
            </td>
          </tr>
          <tr className="emp-table-row">
            <td className="emp-table-data">Thinksolar</td>
            <td className="emp-table-data">07AAWFR0503R1ZK</td>
            <td className="emp-table-data">60 days</td>
            <td className="emp-table-data">Nagpur</td>
            {/* <td className="emp-table-data emp-status">
                  <span style={getStatusStyle("Permanent")}>Permanent</span>
                </td> */}
            <td className="emp-table-data emp-action">
            <span className="twoBtnSpan">
                <button className="purpleBtn">+ POC</button>
                <button className="purpleBtn">+ Job Post</button>
              </span>
              <span>
                <img src={showIcon} alt="" />
              </span>
              <span>
                <img src={editIcon} alt="" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
