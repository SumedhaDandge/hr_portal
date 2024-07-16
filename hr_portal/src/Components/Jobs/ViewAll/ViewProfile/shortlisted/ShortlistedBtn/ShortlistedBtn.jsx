// import CircleIcon from '@mui/icons-material/Circle';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// import "../../../ViewAll.css"

// function ShortlistedBtn() {
//   return (
//    <div className='ShortlistedBtn'>  
//      <h1> <CircleIcon sx={{fontSize:"12px",color:"#24AE32",marginRight:"10px"}}/> Job Shorlisted</h1>
//      <button> <AddCircleOutlineIcon/> Share Candidate</button>
//    </div>
//   );
// }

// export default ShortlistedBtn;
    





import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../../../ViewAll.css'

function ShortlistedBtn() {
  return (
    <div className='ShortlistedBtn'>  
      <h1><CircleIcon sx={{ fontSize: "12px", color: "#24AE32", marginRight: "10px" }} /> Job Shortlisted</h1>
      <button><AddCircleOutlineIcon /> Share Candidate</button>
    </div>
  );
}

export default ShortlistedBtn;
