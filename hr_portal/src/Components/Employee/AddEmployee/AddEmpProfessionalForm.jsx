// import "./candidatePersonal.css";

const AddEmpProfessionalForm = () => {
  return (
    <>
      <div className="candidate-form-container">
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="candidate-form-field">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              type="text"
              id="candidateId"
              name="candidateId"
              placeholder="Candidate ID"
            />
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="lastName">Last Name</label> */}
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="candidate-form-field">
            {/* <label htmlFor="gender">Gender</label> */}
            <select id="gender" name="gender" placeholder="Gender">
              <option className="defaultSelect" value="">
                Select Candidate Type
              </option>
              <option value="male">One</option>
              <option value="female">Two</option>
              <option value="other">Three</option>
            </select>
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              type="text"
              id="skillset"
              name="skillset"
              placeholder="Skillset"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="candidate-form-field">
            {/* <label htmlFor="gender">Gender</label> */}
            <select id="gender" name="gender" placeholder="Gender">
              <option className="defaultSelect" value="">
                Select Department
              </option>
              <option value="male">One</option>
              <option value="female">Two</option>
              <option value="other">Three</option>
            </select>
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              type="text"
              id="currentCompany"
              name="currentCompany"
              placeholder="Current Company"
            />
          </div>
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field">
              {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="candidate-form-field">
              {/* <label htmlFor="gender">Gender</label> */}
              <select id="gender" name="gender" placeholder="Gender">
                <option className="defaultSelect" value="">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field">
              {/* <label htmlFor="gender">Gender</label> */}
              <select id="gender" name="gender" placeholder="Gender">
                <option className="defaultSelect" value="">
                  Select Gender
                </option>
                {/* <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option> */}
              </select>
            </div>
            <div className="candidate-form-field">
              {/* <label htmlFor="gender">Gender</label> */}
              <select id="gender" name="gender" placeholder="Gender">
                {/* <option className="defaultSelect" value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option> */}
              </select>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field">              
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
          </div> */}
        </div>
        <div className="candidate-form-group grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="candidate-form-field">
              {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="candidate-form-field">
              {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="candidate-form-field">
              {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="candidate-form-field">
              {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="candidate-form-field">
            {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
            />
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

export default AddEmpProfessionalForm;
