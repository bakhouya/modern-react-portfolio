
import { useState } from "react"
import CardProject from "../../components/projects/Card"
import { Link } from "react-router-dom"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";
import DetailProject from "../../components/projects/Detail"
import Clicked from "../../utils/Click";

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

                    <div className="title_section">
                        <div className="text text-3xl text-center text_primary text-semibold" data-aos="zoom-in">
                            {title}
                        </div>
                        <div className="text text-base text-center my_start_3" data-aos="fade-up">
                            {description}
                        </div>
                    </div>


                    <div className="cards_projects my_start_30">
                        {projects?.results?.map((project, index) => (
                            <CardProject key={project?.id} index={index} project={project} showDetails={getDetails}/>
                        ))}
                    </div>

                    {projects?.length > 5 && (
                        <div className="flex_center_center my_start_30" data-aos="fade-up">
                            <Link to={"https://lucide.dev/icons/send"} className="btn btn_md border_2 flex_center_center radius_30 btn_outline_primary">
                                Show All Projects
                            </Link>
                        </div>
                    )}
                    
                </div>
            </div>
            {detail && item &&  (<DetailProject onClose={close} data={item}/>) }
        </section>
    )
}