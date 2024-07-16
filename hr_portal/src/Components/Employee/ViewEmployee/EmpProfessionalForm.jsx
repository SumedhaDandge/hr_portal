

const EmpPersonalInformation = () => (
    <div className="personal-information">
      <div className="info-group">
        <div className="info-item">
          <label>Employee ID</label>
          <p>77896533</p>
        </div>
        <div className="info-item">
          <label>Employee Type</label>
          <p>Office</p>
        </div>  
        <div className="info-item">
          <label>Designation</label>
          <p>HR Executive</p>
        </div>                       
      </div>
      <div className="info-group">
      <div className="info-item">
          <label>Username</label>
          <p>Manasi</p>
        </div>
        <div className="info-item">
          <label>Email Address</label>
          <p>manasi@vitric.in</p>
        </div>
        <div className="info-item">
          <label>Joining</label>
          <p>July 14, 2021</p>
        </div>              
      </div>
      <div className="info-group">
      <div className="info-item">
          <label>Office Location</label>
          <p>Abhyankar Nagar, Nagpur</p>
        </div>
        <div className="info-item">
          <label>Working Days</label>
          <p>5 Days</p>
        </div> 
        <div className="info-item">
         <button className="uploadbtn-nobg">Upload CV/Resume</button>
        </div>           
      </div>      
     
    </div>
  );
  
  export default EmpPersonalInformation;
  