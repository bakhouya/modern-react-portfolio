
// import card certificate component
import CardCertificate from "../../components/certificate/Card"
// import dynamic title headile component 
import Title from "../../components/basic/Title"
// import top & bottom waves for sections
import Wavetop from "../../assets/svg/wavetop.svg"
import WaveBottom from "../../assets/svg/wavebottom.svg"
// import swipper meduls 
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay} from "swiper/modules" ;
// import portfolio Context
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";


export default function Certificate({title, description}) {
    // Get certificates data from portfolio context
    const { certificates } = useContext(PortfolioContext) ;
    // Check if certificates data not fount return "NULL"
    if(certificates.results.length <= 0 ) {return null}
    // if we have certificates data return the section JSX component
    return (
        <section className="certificate_section my_start_40" id="certificates">
            {/* waves top for sections certificate */}
            <img src={Wavetop} alt="" className="waves" />

            <article className="block_waves">
                
                <div className="container">
                    <div className="content_certificate">
                        {/* include component dynamic Title */}
                        <Title title={title} description={description} />

                        {/* swiper card certificate */}
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

            {/* waves bottom for sections certificate */}
            <img src={WaveBottom} alt="" className="w_10 wave_bottom" />
        </section>
    )
}