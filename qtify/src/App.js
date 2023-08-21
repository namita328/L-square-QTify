import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import Section from "./Components/CardSection/Section";
// import Card from "./Components/Cards/Card";
import { fetchTopAlbums } from "./Components/api/api";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log("before");
    generateTopAlbumData();
    console.log("after");
  }, []);

  console.log(topAlbumData);
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* {topAlbumData.map((ele) => (
        <Card data={ele} type="album" />
      ))} */}
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top albums" data={topAlbumData} />
      </div>
    </>
  );
}

export default App;
