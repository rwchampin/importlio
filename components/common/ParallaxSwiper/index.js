import { Slide } from './Slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ParallaxSwiper() {

	return (
		<Swiper
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
    >
		<SwiperSlide>1</SwiperSlide>
		<SwiperSlide>2</SwiperSlide>
		<SwiperSlide>3</SwiperSlide>
		<SwiperSlide>4</SwiperSlide>
		<SwiperSlide>5</SwiperSlide>
		<SwiperSlide>6</SwiperSlide>
		<SwiperSlide>7</SwiperSlide>

    </Swiper>
	)
}