import React from "react";
import BasicTabs from "../BasicTabs/BasicTabs";
import Card from "../Cards/Card";
import styles from "./CardSection.module.css";
import Carousel from "../Carousel/Carousel";
import { Box, CircularProgress } from "@mui/material";

const Songs = ({
  title,
  data,
  type,
  filteredData,
  filteredDataValues = [],
  handleChange,
  value,
}) => {
  console.log("filteredData", filteredDataValues);
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          <Carousel
            data={filteredDataValues}
            renderCardComponent={(item) => (
              <Card data={item} type={type} key={item.id} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Songs;
