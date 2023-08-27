import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ newSongs, generateSongs }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar
        placeholder="Search songs..."
        data={newSongs.map((song) => song.title)}
        onSearch={generateSongs}
      />
      {/* <SearchBar placeholder="Search a album of your choice" /> */}
      <Button children="Give FeedBack" />
    </nav>
  );
};

export default Navbar;
