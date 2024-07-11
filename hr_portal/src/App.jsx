import Sidebar from "./Components/Sidebar/sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from './Components/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <>
       <div className="app-container">
        <Sidebar />
        <div className="main-content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
    </>
  );
}

export default App;
