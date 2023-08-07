import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Carousel = ({children, className}) => {

  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={className}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
  >
    {children?.map(slide => 
          <SwiperSlide key={slide}>
              <img src={slide} alt="imgSlide" />
          </SwiperSlide>)}
  </Swiper>
  )
}
