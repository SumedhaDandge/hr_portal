import filterIcon from "../assets/filter.svg";
import "../styles/filter.css";
import addIcon from "../assets/add-circle.svg";

const ContentHeader = ({ buttonText, onButtonClick, onFilterClick }) => {
  return (
    <>
      <div className="header-container">      
        {/* <div className="header-buttons"> */}
          <button className="purple-btn" onClick={onButtonClick}>
            <span>
            <img src={addIcon} alt="add new employee" />
            </span>
            <span> {buttonText}</span>           
          </button>
          <button className="filter-container" onClick={onFilterClick}>
            <span>
              <img src={filterIcon} alt="filter" />
            </span>
            <span>Filter</span>
          </button>
        {/* </div> */}
      </div>
    </>
  );
};


export default ContentHeader;
