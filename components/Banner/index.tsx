import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper 
        slidesPerView={1} 
        className={styles.swiper}
        autoplay={{
            delay:5000,
            disableOnInteraction: false
        }}
        modules={[Autoplay]}
        loop={true}
    >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>1</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>2</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
