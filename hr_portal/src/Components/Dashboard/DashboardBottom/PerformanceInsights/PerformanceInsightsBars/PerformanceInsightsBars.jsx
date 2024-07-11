// PerformanceInsightsBars.js

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import '../PerformanceInsights.css'

function PerformanceInsightsBars() {
  return (
    <div className="performance_insight_bars mb-5">
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24'] }]}
        series={[
          { data: [7, 5, 6, 4, 2, 1], label: 'No of Interviewed',  color: '#7152F3' },
          { data: [1, 3, 4, 6, 5, 2], label: 'No of Joined', color: 'red' }
        ]}
        width={900}
        height={400}
      />
    </div>
  );
}

export default PerformanceInsightsBars;











// import '../Performance Insights.css';
// import { BarChart } from '@mui/x-charts/BarChart';



// function PerformanceInsightsBars() {
//     return (
//       <div className="performance_insight_bars mb-5">
//       <BarChart
//       xAxis={[{ scaleType: 'band', data: ['Jan-24', 'Feb-24', 'Mar-24','Apr-24', 'May-24', 'Jun-24'] }]}
//       series={[{ data: [7, 5, 6,4,2,1], label: 'No of Interviewed' }, { data: [1, 3, 4,6, ,5] ,label: 'No of Joined'}]}
//       width={500}
//       height={300}
//     />
//   </div>
//     );
//   }
  
//   export default PerformanceInsightsBars;
  