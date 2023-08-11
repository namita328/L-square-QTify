import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const SearchBar = ({ placeholder, data }) => {
  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
