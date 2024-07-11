// import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { LabelList } from 'recharts';
// import '../../JobStatus.css';

// const palette = ['green', 'orange', 'red'];

// function TotalJobs() {
//   return (
    // <div className="total_jobs flex flex-col justify-center items-center">
    //     <h1 className='text-3xl font-bold '>Total Jobs</h1>
    //   <PieChart
    //     colors={palette}
    //     series={[
    //       {
    //         data: [
    //           { id: 0, value: 14, label: 'open' },
    //           { id: 1, value: 3, label: 'pause' },
    //           { id: 2, value: 6, label: 'close' },
    //         ],
    //       },
    //     ]}
    //     width={400}
    //     height={200}
    //   >
    //     <LabelList dataKey="label" position="top" />
    //   </PieChart>

    // </div>
//   );
// }

// export default TotalJobs;


import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import '../../JobStatus.css';

const data = [
  { id: 0, value: 3, label: 'Open' },
  { id: 1, value: 6, label: 'Pause' },
  { id: 2, value: 14, label: 'Close' },
];

const palette = [ 'orange','red','green'];

function TotalJobs() {
  return (
    <div className="total_jobs ">
           <h1 className='text-3xl font-bold '>Total Jobs</h1>
      <div className="legend flex justify-center mb-4">
        {data.map((entry, index) => (
          <div key={entry.id} className="legend-item flex items-center mx-2">
            <span className="legend-color-block" style={{ backgroundColor: palette[index], width: 25, height: 25, display: 'inline-block', marginRight: 4 }}></span>
            <span className="legend-label">{entry.label}</span>
          </div>
        ))}
      </div>
      <PieChart width={500} height={200}>
        <Pie 
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={palette[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default TotalJobs;
