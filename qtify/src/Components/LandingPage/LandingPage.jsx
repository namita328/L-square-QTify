import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "../api/api";
import React from "react";
import { useEffect, useState } from "react";
import NewSection from "../CardSection/NewSection";
import TopSection from "../CardSection/TopSection";
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import Songs from "../CardSection/Songs";
import styles from "../../App.module.css";
import Faq from "../Accordian/Faq";

const LandingPage = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [newSongs, setNewSongs] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("handle chnge", newValue);
    setValue(newValue);
  };

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setNewSongs(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };

  const generateSongs = async (searchTerm) => {
    try {
      let key;
      console.log("newSongs", newSongs);
      if (value === 0) {
        filteredData(newSongs);
        return;
      } else if (value === 1) {
        key = "rock";
      } else if (value === 2) {
        key = "pop";
      } else if (value === 3) {
        key = "jazz";
      } else {
        key = "blues";
      }
      let filteredSongs = newSongs.filter((song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const res = newSongs.filter((item) => item.genre.key === key);
      console.log("generateSongs", res);
      // filteredData(res);
      filteredData(filteredSongs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  useEffect(() => {
    generateSongs(value);
  }, [value]);

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  return (
    <>
      <NavBar newSongs={newSongs} generateSongs={generateSongs} />
      <HeroSection />
      <div className={styles.sectionWrapper1}>
        <TopSection type="album" title="Top albums" data={topAlbumData} />
      </div>
      <div className={styles.sectionWrapper2}>
        <NewSection type="album" title="New Album" data={newAlbumData} />
      </div>
      <hr />
      <div className={styles.sectionWrapper3}>
        <Songs
          type="song"
          title="Songs"
          data={newSongs}
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <hr />
      <Faq />
    </>
  );
};

export default LandingPage;
