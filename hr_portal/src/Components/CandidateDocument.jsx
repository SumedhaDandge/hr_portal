import "../styles/candidatePersonal.css";
import { FiUpload } from "react-icons/fi";

const CandidateDocument = () => {
  return (
    <>
      <div class="box__input grid grid-cols-2 gap-4">
        <div className="addFile-box">
          <span className="upload-heading">Upload Appointment Letter</span>
          <div className="chooseFile-box">
            <button className="choosefile-btn">
              <FiUpload />
            </button>
            <span className="strongText">
              Drag & Drop or <i>choose file</i> to upload
            </span>
            <p>Supported formats: Jped, pdf</p>
          </div>
        </div>
        <div className="addFile-box">
          <span className="upload-heading">Upload Salary Slips</span>
          <div className="chooseFile-box">
            <button className="choosefile-btn">
              <FiUpload />
            </button>
            <span className="strongText">
              Drag & Drop or <i>choose file</i> to upload
            </span>
            <p>Supported formats: Jped, pdf</p>
          </div>
        </div>
        <div className="addFile-box">
          <span className="upload-heading">Upload Reliving Letter</span>
          <div className="chooseFile-box">
            <button className="choosefile-btn">
              <FiUpload />
            </button>
            <span className="strongText">
              Drag & Drop or <i>choose file</i> to upload
            </span>
            <p>Supported formats: Jped, pdf</p>
          </div>
        </div>
        <div className="addFile-box">
          <span className="upload-heading">Upload Experience Letter</span>
          <div className="chooseFile-box">
            <button className="choosefile-btn">
              <FiUpload />
            </button>
            <span className="strongText">
              Drag & Drop or <i>choose file</i> to upload
            </span>
            <p>Supported formats: Jped, pdf</p>
          </div>
        </div>

        {/* <button class="box__button" type="submit">Upload</button> */}
      </div>
    </>
  );
};

export default CandidateDocument;
