import React from 'react';
import './CompanyStatus.css'; 

import CompanyStatusCards from './CompanyStatusCards/CompanyStatusCards'; 
import CompanyStatusButton from './CompanyStatusButton/CompanyStatusButton';

function CompanyStatus() {
  return (
    <div className="CompanyStatus">
      <CompanyStatusButton/>

      <CompanyStatusCards /> 
      
     
    </div>
  );
}

export default CompanyStatus;
