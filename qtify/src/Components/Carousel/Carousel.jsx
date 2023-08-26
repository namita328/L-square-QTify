import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data, hideRightArrow }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  const [hideRightArrow, setHideRightArrow] = useState(false);

  const handleReachEnd = (swiper) => {
    const isEnd = swiper.isEnd;
    setHideRightArrow(isEnd);
    localStorage.setItem("hideRightArrow", "true");
  };

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    if (activeIndex === 0) {
      setHideRightArrow(false);
      localStorage.setItem("hideRightArrow", "false");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        onReachEnd={(swiper) => handleReachEnd(swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        {/* <CarouselRightNavigation /> */}
        {hideRightArrow ? null : <CarouselRightNavigation />}

        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderCardComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
