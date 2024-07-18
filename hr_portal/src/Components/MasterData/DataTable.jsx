import React from 'react';
import './masterTable.css';

function DataTable({ title, data, headerIcon }) {
  return (
    <div className="master-table-box">
      <div className="masterTable-header">
        <span className='header-icon'><img src={headerIcon} alt="" /></span>
        <h2>{title}</h2>
        <button className='masterTable-header-btn'>+ New</button>
      </div>
      <table className='master-table'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name of Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.srNo}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="masterTable-pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
}

export default DataTable;
