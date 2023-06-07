import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.searchBarContainer}>

         <button onClick={() => onSearch(Math.floor(Math.random() * 826 + 1))} className={style.randomButton}>RANDOM</button>

         <input type='search' value={id} placeholder="Search ID..." onChange={handleChange} />
         
         <button className={style.addButton} onClick={() => { onSearch(id); setId("") }}>
            <FontAwesomeIcon icon={faSearch} />
         </button>

      </div>
   );
}

export default SearchBar;