
// import swiper meduls
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay} from "swiper/modules";


export default function CarouselImages({images}) {
    return (
        <Swiper spaceBetween={5} 
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation={true}
            loop={true}
            speed={700}
            className="images_swipper">

            {images?.map((image) => (
                <SwiperSlide key={image.id}>
                    <img src={image.image} alt={image.project} loading="lazy" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}