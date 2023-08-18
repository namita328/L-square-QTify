import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import Card from "./Components/Cards/Card";
import { fetchTopAlbums } from "./Components/api/api";
import { useEffect, useState } from "react";

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
      {topAlbumData.map((ele) => (
        <Card data={ele} type="album" />
      ))}
    </>
  );
}

export default App;
