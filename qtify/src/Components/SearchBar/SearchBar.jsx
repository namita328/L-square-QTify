import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const SearchBar = ({ placeholder, data, onSearch, generateSongs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    generateSongs(value);
  };
  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchInputChange}
          onClick={handleInputClick}
        />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </div>
      {showSuggestions && (
        <div className={styles.autocomplete}>
          {data.map((suggestion, index) => (
            <div
              className={styles.suggestionItem}
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
