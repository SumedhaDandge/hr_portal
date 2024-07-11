
import PerformanceInsightsBars from './PerformanceInsightsBars/PerformanceInsightsBars';
import PerformanceInsightsButton from './PerformanceInsightsButton/PerformanceInsightsButton';
import './PerformanceInsights.css'

function PerformanceInsights() {
  return (
   
     <div className="performance_insight mb-5">
     <PerformanceInsightsButton />
     <PerformanceInsightsBars />
   </div>
  );
}

export default PerformanceInsights;










// import PerformanceInsightsBars from './PerformanceInsightsBars/PerformanceInsightsBars';
// import PerformanceInsightsButton from './PerformanceInsightsButton/PerformanceInsightsButton';


// function PerformanceInsights() {
//     return (
//         <div className="performance_insight mb-5">
//             <PerformanceInsightsButton />
//             <PerformanceInsightsBars />
//         </div>
//     );
// }

// export default PerformanceInsights;
