// import useState, useContext from react
import { useState, useContext } from "react"
// import (CardProject, Title) components
import CardProject from "../../components/projects/Card"
import Title from "../../components/basic/Title"
import DetailProject from "../../components/projects/Detail"
// import context provider
import { PortfolioContext } from "../../providers/PortfolioProvider";
// import utils clicked
import Clicked from "../../utils/Click" ;
// import swiper meduls
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay} from "swiper/modules";

export default function Projects({title, description}) {
    // State detail status
    const [detail, setDetail] = useState(false)
    // State item data
    const [item, setItem] = useState(null)
    // Get projects data from context provider
    const { projects } = useContext(PortfolioContext);
    // active detail status & active clicked & get item data to setState
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
    // Check if projects data not fount return "NULL"
    if(projects.results.length <= 0 ) {return null}
    // if we have projects data return the section JSX component

    return (
        <section className="projects_section" id="projects">
            <div className="container">
                <div className="content_projects">
                    {/* include component dynamic Title */}
                    <Title title={title} description={description} />
                    {/* swiper card projects */}
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
            {/* show model data item if active status detail */}
            {detail && item &&  (<DetailProject onClose={close} data={item}/>) }
        </section>
    )
}