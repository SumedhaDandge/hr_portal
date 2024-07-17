import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../contentHeader.jsx";
import "./viewCandidate.css";

const ViewCandidate = () => {
  const navigate = useNavigate();

  const addCandidate = () => {
    navigate("/add-new-candidate");
  };

  const filterEmployee = () => {
    alert("filter");
  };

  return (
    <>
      <Container
        sx={{
          width: "100%",
          background: "#FFFFFF",
          height: "100vh",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "center",
          rowGap: "30px",
          overflowY: "auto",
        }}
      >
        <ContentHeader
          buttonText="Add Candidate"
          onButtonClick={addCandidate}
          onFilterClick={filterEmployee}
        />

        <div className="candidateInfo-box">
          <div className="upper-box">
            <div className="left-info">
              <span className="info-name">
                <h2>Amol Ganjare [Developer]</h2>
              </span>
              <span className="info-highlight">
                {" "}
                Male | amol@vitric.in | 7789675488
              </span>
              <span className="info-general">
                <span>
                  <strong>DOB: </strong>04/09/1994
                </span>
                <span>
                  <strong>Marital Status: </strong>Married
                </span>
                <span>
                  <strong>Nationality: </strong>Indian
                </span>
                <span>
                  <strong>Address: </strong> Nagpur, Laxmi Nagar- Near Diksha
                  Bhoomi (Area) - 441802
                </span>
              </span>
            </div>
            <div className="righ-info">
              <button className="info-smallBtn">View CV</button>
            </div>
          </div>
          <div className="lower-box">
            <div className="lower-left-info">
              {/* <div className="first-column-info"> */}
                <span className="info-general-lower">
                  <span className="info-section">
                    <span>
                      <strong>Current Location: </strong>Nagpur
                    </span>
                    <span>
                      <strong>Prefered: </strong>Nagpur
                    </span>
                  </span>

                  <span className="info-section">
                    <span>
                      <strong>Total Experience: </strong>5 yrs
                    </span>
                    <span>
                      <strong>Relevant Experience: </strong>4 yrs
                    </span>
                  </span>
                </span>
              {/* </div> */}
              {/* <div className="second-column-info"> */}
                <span className="info-general-lower">
                  <span className="info-section">
                    <span>
                      <strong>Current CTC: </strong>4 LPA
                    </span>
                    <span>
                      <strong>Expected CTC: </strong>5 LPA
                    </span>
                  </span>

                  <span className="info-section">
                    <span>
                      <strong>Position: </strong>Developer
                    </span>
                    <span>
                      <strong>Skills: </strong>React, Python
                    </span>
                  </span>
                </span>
              {/* </div> */}
              {/* <div className="third-column-info"> */}
                <span className="info-general-lower">
                  <span className="info-section">
                    <span>
                      <strong>Remark: </strong>None
                    </span>
                  </span>
                </span>
              {/* </div> */}
            </div>
            <div className="right-info lower-right">
            <button className="info-smallBtn">Shortlist</button>
            <button className="info-smallBtn">Send JD</button>
            <button className="info-black-smallBtn">View Comment</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ViewCandidate;
