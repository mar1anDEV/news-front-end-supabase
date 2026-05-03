import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Swiper} from 'swiper/react';


function Carousel({children}: {children: React.ReactNode}) {
  return (
    <Swiper
      className="w-full h-full"
      watchOverflow={true}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      navigation
      pagination={{ clickable: true }}
      loop={false}
    >
      {children}
    </Swiper>
  )
}

export default Carousel