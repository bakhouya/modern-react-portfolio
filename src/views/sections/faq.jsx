

// import Title dynamic compoent
import Title from "../../components/basic/Title"
// import portfolio context provider
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";
// import swiper meduls
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay} from "swiper/modules" 

export default function Faqs({title, description}) {
    // Get faqs in context
    const { faqs } = useContext(PortfolioContext) ;
    // Check if faqs data not fount return "NULL"
    if(faqs.results.length <= 0 ) {return null}
    // if we have faqs data return the section JSX component
    return (
        <section className="faqs_section my_start_40" id="faqs">
            <div className="container">
                <div className="content_faqs">
                    {/* include component dynamic Title */}
                    <Title title={title} description={description} />
                    {/* swiper card faqs */}
                    <article className="flex_faqs">                       
                        <Swiper spaceBetween={15} 
                            slidesPerView={1}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            loop={true}
                            speed={700}
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 10  },
                                768: { slidesPerView: 1, spaceBetween: 10 },
                                1024: { slidesPerView: 2, spaceBetween: 18 },
                            }} className="cards_faqs">

                            {faqs?.results?.map((faq, index) => (
                                <SwiperSlide key={faq.id}>
                                    <div className="accordion__item" data-aos="fade-up" data-aos-delay={index * 150}>
                                        <div className="accordion__link">
                                            <div className="text text-xl text-medium"> {faq?.title} </div>
                                        </div>
                                        <div className="sub-accordion">
                                            <div className="text text-base sub-accordion__item text-line-3">
                                                {faq?.description}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        
                    </article>
                   
                </div>
            </div>
        </section>
    )
}