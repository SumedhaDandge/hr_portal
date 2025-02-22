import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaUser, FaBriefcase, FaFileAlt, FaLock } from "react-icons/fa";
import CandidatePersonalForm from "../CandidatePersonalForm";
import CandidateProfessionalForm from "../CandidateProfessionalForm";


const AddCandidate = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const getIcon = (iconBlack, iconRed, isSelected) => (
  //     <img src={isSelected ? iconRed : iconBlack} alt="" style={{ width: 24, height: 24 }} />
  // );
  //   const getSvgIcon = (iconPath, isSelected) => (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //       style={{ color: isSelected ? "red" : "black" }}
  //     >
  //       <path d={iconPath} fill="currentColor" />
  //     </svg>
  //   );

  return (
    <Box sx={{ width: "95%", background:"var(--white)", margin:"10px", padding:"10px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        TabIndicatorProps={{
          sx: { backgroundColor: "#7152F3", height: 3 },
        }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
            padding: "10px 20px",
            color: "black",
            "&.Mui-selected": {
              color: "#7152F3",
            },
            "&:focus": {
              outline: "none",
            },
          },
          "& .MuiSvgIcon-root": {
            color: "black",
            "&.Mui-selected": {
              color: "#7152F3",
            },
          },
        }}
      >
        <Tab
          value="one"
          icon={<FaUser color={value === "one" ? "#7152F3" : "black"} />}
          iconPosition="start"
          label="Personal Information"
        />

        <Tab
          value="two"
          icon={<FaBriefcase color={value === "two" ? "#7152F3" : "black"} />}
          iconPosition="start"
          label="Professional Information"
        />

        {/* <Tab
          value="four"
          icon={<FaLock color={value === 'four' ? 'red' : 'black'} />}
          iconPosition="start"
          label="Account Access"
        /> */}
      </Tabs>

      <Box
        sx={{
          padding: "20px",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        {value === "one" && <CandidatePersonalForm />}
        {value === "two" && <CandidateProfessionalForm />}        
        {/* Add more conditional form rendering as needed */}
      </Box>
    </Box>
  );
};

export default AddCandidate;
