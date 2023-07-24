import { SwiperSlide } from 'swiper/react';


export default function Slide({ children }) {

	return (
		<SwiperSlide>
			{children}
		</SwiperSlide>
	)
}