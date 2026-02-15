
// import card certificate component
import CardCertificate from "../../components/certificate/Card"
import DetailCertificates from "../../components/certificate/Detail"
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
import { useState, useContext } from "react";
// import utils clicked
import Clicked from "../../utils/Click" ;






export default function Certificate({title, description}) {
    // Get certificates data from portfolio context
    const { certificates } = useContext(PortfolioContext) ;
    // Check if certificates data not fount return "NULL"
    if(certificates.results.length <= 0 ) {return null}
    // if we have certificates data return the section JSX component

    // State detail status
    const [detail, setDetail] = useState(false)
    // State item data
    const [item, setItem] = useState(null)

    function getDetails (item) {
        Clicked()
        setItem(item)
        setDetail(true) 
    }
    //  closed detail status
    function close () {
        Clicked()
        setItem(null)
        setDetail(false) 
    }

    return (
        <>
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
                            modules={[Navigation]}
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
                                    <CardCertificate index={index} data={certificate} showDetails={getDetails}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                </div>

            </article>

            {/* waves bottom for sections certificate */}
            <img src={WaveBottom} alt="" className="w_10 wave_bottom" />

        </section>
        {/* show model data item if active status detail */}
        {detail && item &&  (<DetailCertificates onClose={close} data={item}/>) }
        </>
    )
}