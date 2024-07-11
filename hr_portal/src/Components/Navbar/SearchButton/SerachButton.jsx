import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Navbar.css'




function SearchButton() {
  return (
    <>
      <div className="search-container ">
        <input type="search" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </>
  );
}

export default SearchButton;
