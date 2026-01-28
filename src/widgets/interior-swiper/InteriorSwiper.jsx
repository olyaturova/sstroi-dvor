import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { dataInterior } from '@/shared/data/data-interior';
import styles from './InteriorSwiper.module.scss';

export const InteriorSwiper = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.swiper}
      >
        {dataInterior.map((slide) => (
          <SwiperSlide 
            key={slide.id}
            className={styles.swiperSlide}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className={styles.slideCover}>
              <p className={styles.slideText}>{slide.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};