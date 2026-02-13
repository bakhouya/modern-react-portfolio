
import { ImageIcon, Eye } from "lucide-react"
import LikeProject from "./Like"
import SkillsProject from "./SkillsProject"

export default function CardProject({index, project, showDetails}) {

    function GetDetails(item) {
        showDetails(item)
    }
    return (
        <>
        <div className="card_project" data-aos="zoom-in" data-aos-delay={index * 100}>

            <div className="header_card flex_center_center" onClick={() => GetDetails(project)}>
                <div className="inset_text text text-xs border border_secoundary radius_20 px_10 text_secoundary top_10"> 
                    {project?.type_details?.title} 
                </div>
                {project?.images_details.length >= 1 ?
                    <>
                        <img src={project?.images_details[0].image} className="image_project" alt={project?.title} loading="lazy" /> 
                        <div className="overlay overlay_2"></div> 
                    </>
                                          
                : <div className="loading_image"><ImageIcon size={22} className="text_primary"/></div>}
            </div>

            <div className="body_card my_start_8">
                <div className="flex_line">
                    <div className="text text-xl text-medium single-line-title"> {project.title} </div>
                    <div className="flex_start_center other">
                        <LikeProject project={project?.id} count={project?.likes_count} list={true}/>
                        <span className="slach-sm"></span>
                        <div className="pointer flex_start_center gap_5" type="button">
                            <Eye size={18}/> {project?.views_count}
                        </div>
                    </div>
                </div>
                <div className="text text-base my_start_5 text-line-2">{project?.description}</div>

                <div className="flex_between_center my_start_12">
                    <SkillsProject skills={project?.skills_details} />
                </div>
            </div>

        </div>

        </>
    )
}