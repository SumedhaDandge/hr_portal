// import React from "react";
// import { PieChart } from '@mui/x-charts/PieChart';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import "../../JobStatus.css";
// import { PieChart, Pie, Cell } from "recharts";
// import './openjons.css';

// const datar1 = [
//     { id: 0, value: 4, label: 'Shortlisted' },
//     { id: 1, value: 2, label: 'JD sent' },
//     { id: 2, value: 3, label: 'Close' },
//     { id: 3, value: 4, label: 'Denied' },
//     { id: 4, value: 3, label: 'Shared' },
//     { id: 5, value: 1, label: 'Reject' },
// ];

// const datar2 = [
//     { id: 0, value: 1, label: 'Shortlisted' },
//     { id: 1, value: 3, label: 'JD sent' },
//     { id: 2, value: 5, label: 'Close' },
//     { id: 3, value: 9, label: 'Denied' },
//     { id: 4, value: 6, label: 'Shared' },
//     { id: 5, value: 8, label: 'Reject' },
// ];

// const pieParams = { height: 200, margin: { right: 2 } };

// function OpenJobs() {
//     return (
//         <div className="open_jobs">
//             <h1 className="text-3xl font-bold text-center">Open Jobs</h1>

//             <Stack direction="row" spacing={1}>
//             <Box flexGrow={1} textAlign="end" >
//                     <Typography  variant="h6 font-bold ">Round 1</Typography>
//                     <PieChart width={200} height={200}
//                         // colors={palette}
//                         series={[
//                             {
//                                 data: datar1,
//                                 innerRadius: 55,
//                                 outerRadius: 90,
//                             }
//                         ]}
//                         {...pieParams}
//                     />
//                 </Box>
//                 <Box flexGrow={1} textAlign="center">
//                     <Typography variant="h6 font-bold ">Round 2</Typography>
//                     <PieChart
//                         // colors={palette}
//                         series={[
//                             {
//                                 data: datar2,
//                                 innerRadius: 55,
//                                 outerRadius: 90,
//                             }
//                         ]}
//                         {...pieParams}
//                     />
//                 </Box>
//             </Stack>
//         </div>
//     );
// }

// export default OpenJobs;

import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import "./openjons.css";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const pieParams = { height: 300, width:300, margin: { left: 80 } };
const palette = ['red', 'blue', 'green'];


const data1 = [
  { id: 0, value: 4, label: "Shortlisted", color: "#8884d8" },
  { id: 1, value: 2, label: "JD sent", color: "#83a6ed" },
  { id: 2, value: 3, label: "Close", color: "#8dd1e1" },
  { id: 3, value: 4, label: "Denied", color: "#82ca9d" },
  { id: 4, value: 3, label: "Shared", color: "#a4de6c" },
  { id: 5, value: 1, label: "Reject", color: "#d0ed57" },
];



function OpenJobs() {
  return (
  <div className="open_jobs">
       <h1 className="text-3xl font-bold text-center">Stats</h1>
       <PieChart  width={500} height={200}
        series={[
            {
              data:data1,
              innerRadius: 40,
              outerRadius: 80,
            //   paddingAngle: 5,
            //   cornerRadius: 5,
            //   startAngle: -90,
            //   endAngle: 180,
              cx: 10,
              cy: 150,
            }
          ]}
          {...pieParams}
        />
      
  </div>
  );
}

export default OpenJobs;
