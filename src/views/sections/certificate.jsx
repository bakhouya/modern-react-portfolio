
import CardCertificate from "../../components/certificate/Card"
import Title from "../../components/basic/Title"
import { Link } from "react-router-dom"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";
import Wavetop from "../../assets/svg/wavetop.svg"
import WaveBottom from "../../assets/svg/wavebottom.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay} from "swiper/modules" ;



export default function Certificate({title, description}) {
    const { certificates } = useContext(PortfolioContext) ;
    return (
        <section className="certificate_section my_start_40" id="certificates">
            <img src={Wavetop} alt="" className="waves" />

            <article className="block_waves">
                
                <div className="container">
                    <div className="content_certificate">

                        <Title title={title} description={description} />


                        <Swiper spaceBetween={20} 
                            slidesPerView={1}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop={true}
                            speed={700}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                            }} className="cards_certificate">
                            {certificates?.results?.map((certificate, index) => (
                                <SwiperSlide key={certificate.id}>
                                    <CardCertificate index={index} data={certificate}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>

            </article>

            <img src={WaveBottom} alt="" className="w_10 wave_bottom" />
        </section>
    )
}