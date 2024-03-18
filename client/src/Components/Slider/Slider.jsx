import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
const Slider = () => {
  return (
    <div className="h-[30vh] rounded-none sm:h-[70vh] xl:h-[80vh] 2xl:h-[80vh]">
       <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/dGpVjCt/image.png" className="w-full rounded-none h-full  object-fill" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/9nMbk7j/image.png" className="w-full rounded-none h-full  object-fill" alt="..." /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/d6D1s7Z/image.png" className="w-full rounded-none h-full  object-fill" alt="..." /></SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default Slider