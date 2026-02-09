
import { useState } from "react"
import CardProject from "../../components/projects/Card"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";
import DetailProject from "../../components/projects/Detail"
import Title from "../../components/basic/Title"
import Clicked from "../../utils/Click" ;
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay} from "swiper/modules";

export default function Projects({title, description}) {
    const [detail, setDetail] = useState(false)
    const [item, setItem] = useState(null)
    const { projects } = useContext(PortfolioContext);

    function getDetails (item) {
        Clicked()
        setItem(item)
        setDetail(true) 
    }
    function close () {
        Clicked()
        setItem(null)
        setDetail(false) 
    }

    return (
        <section className="projects_section" id="projects">
            <div className="container">
                <div className="content_projects">

                    <Title title={title} description={description} />
                    
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
                        }} 
                        className="cards_projects">

                        {projects?.results?.map((project, index) => (
                            <SwiperSlide key={project.id}>
                                <div className="my_end_70">
                                    <CardProject index={index} project={project} showDetails={getDetails}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                                        
                </div>
            </div>
            {detail && item &&  (<DetailProject onClose={close} data={item}/>) }
        </section>
    )
}