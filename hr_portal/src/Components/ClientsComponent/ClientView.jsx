import "./clientView.css";
import clientProfile from "../../assets/client-profile-purple.png";
import editIcon from "../../assets/edit-white.svg";
import bulbIcon from "../../assets/idea-bulb-purple.png";
import purpleEdit from "../../assets/edit-purple.svg";
import purpleBriefcase from "../../assets/briefcase-purple.png";
import showIcon from "../../assets/view-purple.svg";


const ClientView = () => {
  return (
    <>
      <div className="clientview-container">
        <div className="clientview-content">
          <div className="clcontent-head">
            <section className="contentHead-span">
              <img src={clientProfile} alt="profile icon" />
              <span>Client Profile</span>
            </section>
            <section className="contentHead-span">
              <button className="purpleBtn">
                <img src={editIcon} alt="profile icon" />
                Details
              </button>
            </section>
          </div>
          <div className="clcontent-box">
            <section className="clcontent left-content">
              <h2>ThinkSolar</h2>
              <span className="content-details">
                <p>
                  <strong>Address : </strong>Nagpur, (Area..) (441802) - MH
                </p>
                <p>
                  <strong>City : </strong>Nagpur
                </p>
                <p>
                  <strong>Gst no. : </strong>07AAWFR0503R1ZK
                </p>
              </span>
              <span className="content-leftBtns">
                <button className="content-btn">View Agreement</button>
                <button className="nobg-btn">Payment Term: 60</button>
              </span>
            </section>
            <section className="clcontent right-content">
              <h2>Assigned Employee:</h2>
              <span className="emp-box">
                <p>Manasi</p>
                <p>Priya</p>
                <p>Meghana</p>
              </span>
            </section>
          </div>
        </div>

        <div className="clientview-content">
          <div className="clcontent-head">
            <section className="contentHead-span">
              <img src={bulbIcon} alt="profile icon" />
              <span>POC</span>
            </section>
            <section className="contentHead-span">
              <button className="purpleBtn">+ New</button>
            </section>
          </div>
          <div className="clcontent-box table-content-box">
            <table className="employee-table">
              <thead className="emp-table-headRow">
                <tr>
                  <th className="emp-table-head">Name</th>
                  <th className="emp-table-head">Mobile No.</th>
                  <th className="emp-table-head">Email</th>
                  <th className="emp-table-head" style={{ width: "200px" }}>
                    Designation
                  </th>
                  <th className="emp-table-head">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {employees.map((employee) => ( ))} */}
                <tr className="emp-table-row">
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data">7709703563</td>
                  <td className="emp-table-data">amol@vitric.on</td>
                  <td className="emp-table-data">Director</td>
                  <td className="emp-table-data emp-action">
                    {/* <span className="twoBtnSpan"> */}
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    {/* </span>              */}
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data">7709703563</td>
                  <td className="emp-table-data">amol@vitric.on</td>
                  <td className="emp-table-data">Director</td>
                  <td className="emp-table-data emp-action">
                    {/* <span className="twoBtnSpan"> */}
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    {/* </span>              */}
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data">7709703563</td>
                  <td className="emp-table-data">amol@vitric.on</td>
                  <td className="emp-table-data">Director</td>
                  <td className="emp-table-data emp-action">
                    {/* <span className="twoBtnSpan"> */}
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    {/* </span>              */}
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data">7709703563</td>
                  <td className="emp-table-data">amol@vitric.on</td>
                  <td className="emp-table-data">Director</td>
                  <td className="emp-table-data emp-action">
                    {/* <span className="twoBtnSpan"> */}
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    {/* </span>              */}
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data">7709703563</td>
                  <td className="emp-table-data">amol@vitric.on</td>
                  <td className="emp-table-data">Director</td>
                  <td className="emp-table-data emp-action">
                    {/* <span className="twoBtnSpan"> */}
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    {/* </span>              */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="clientview-content">
          <div className="clcontent-head">
            <section className="contentHead-span">
              <img src={purpleBriefcase} alt="profile icon" />
              <span>Job</span>
            </section>
            <section className="contentHead-span">
              <button className="purpleBtn">+ New</button>
            </section>
          </div>
          <div className="clcontent-box table-content-box">
            <table className="employee-table">
              <thead className="emp-table-headRow">
                <tr>
                  <th className="emp-table-head">Position/Role</th>
                  <th className="emp-table-head">NCR</th>
                  <th className="emp-table-head">Status</th>
                  {/* <th className="emp-table-head">POC Name</th> */}
                  <th className="emp-table-head" style={{ width: "200px" }}>
                    POC Name
                  </th>
                  <th className="emp-table-head">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {employees.map((employee) => ( ))} */}
                <tr className="emp-table-row">
                  <td className="emp-table-data">Automation Testing</td>
                  <td className="emp-table-data">3</td>
                  <td className="emp-table-data">open</td>
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data emp-action">                   
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    <span>
                <img src={showIcon} alt="" />
              </span>
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Automation Testing</td>
                  <td className="emp-table-data">3</td>
                  <td className="emp-table-data">open</td>
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data emp-action">                   
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    <span>
                <img src={showIcon} alt="" />
              </span>
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Automation Testing</td>
                  <td className="emp-table-data">3</td>
                  <td className="emp-table-data">open</td>
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data emp-action">                   
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    <span>
                <img src={showIcon} alt="" />
              </span>
                  </td>
                </tr>
                <tr className="emp-table-row">
                  <td className="emp-table-data">Automation Testing</td>
                  <td className="emp-table-data">3</td>
                  <td className="emp-table-data">open</td>
                  <td className="emp-table-data">Amol Ganjare</td>
                  <td className="emp-table-data emp-action">                   
                    <button className="edit-btn">
                      <img src={purpleEdit} alt="efit icon" />
                      Edit
                    </button>
                    <span>
                <img src={showIcon} alt="" />
              </span>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="clientview-content"></div> */}
      </div>
    </>
  );
};

export default ClientView;
