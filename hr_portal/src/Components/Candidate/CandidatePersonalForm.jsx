import "./candidatePersonal.css";

const CandidatePersonalForm = () => {
  return (
    <>
      <div className="candidate-form-container">
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="candidate-form-field">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="lastName">Last Name</label> */}
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field">
              {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="candidate-form-field custom-select">
              {/* <label htmlFor="gender">Gender</label> */}
              <select id="gender" name="gender" placeholder="Gender">
                <option className="defaultSelect" value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field">
              {/* <label htmlFor="dob">Date of Birth</label> */}
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
              />
            </div>
            <div className="candidate-form-field custom-select">
              {/* <label htmlFor="maritalStatus">Marital Status</label> */}
              <select
                id="maritalStatus"
                name="maritalStatus"
                placeholder="Marital Status"
              >
                <option className="defaultSelect" value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="nationality">Nationality</label> */}
            <input
              type="text"
              id="nationality"
              name="nationality"
              placeholder="Nationality"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="candidate-form-field" style={{ flex: "0 0 100%" }}>
            {/* <label htmlFor="address">Address</label> */}
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
            />
          </div>
          <div className="candidate-form-field" style={{ flex: "0 0 100%" }}>
            {/* <label htmlFor="uploadDocuments">Upload Documents</label> */}
            <input
              type="file"
              id="uploadDocuments"
              name="uploadDocuments"
              placeholder="Upload Documents"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field custom-select">
              {/* <label htmlFor="city">City</label> */}
              <select id="city" name="city">
                <option className="defaultSelect" value="">Select City</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="candidate-form-field custom-select">
              {/* <label htmlFor="state">State</label> */}
              <select id="state" name="state">
                <option className="defaultSelect" value="">Select State</option>
                {/* Add options here */}
              </select>
            </div>
          </div>
        </div>
        <div className="candidate-form-actions">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="next-btn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CandidatePersonalForm;
