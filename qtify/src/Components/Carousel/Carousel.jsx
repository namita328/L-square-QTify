import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  console.log(swiper);

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderCardComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
