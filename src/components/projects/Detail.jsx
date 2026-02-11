
import { Eye, Github, X, Youtube, ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Clicked from "../../utils/Click";
import LikeProject from "./Like"
import SkillsProject from "./SkillsProject"
import { useQuery} from "@tanstack/react-query";
import {getProjectDetail} from "../../services/trackService"
import CarouselImages from "./CarouselImages";

export default function DetailProject({data, onClose }) {
    const [carousel, setCarousel] = useState(0)
    
    const project = useQuery({
        queryKey: ["project", data?.id],
        queryFn: () => getProjectDetail(data?.id),
        enabled: !!data?.id,
        staleTime: 1000 * 60,
        refetchInterval: 1000 * 60,
    });
    function Next(){
        Clicked()
        carousel < data?.images_details.length  - 1 ? setCarousel(carousel + 1) : setCarousel(0)
    }
    function prev(){
        Clicked()
        carousel > 0 ? setCarousel(carousel - 1): setCarousel(data?.images_details.length - 1)
    }
    
    if(project.isLoading) {
        return (
            <div className='model_loader'>
                <div className="box_loader">
                <div className="lds-ripple"><div></div><div></div></div>
                </div>
            </div>
        )
    }

    return (
        <AnimatePresence>
        
        
        <article className="model">
            <motion.article className="model_opacity" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        onClick={onClose}/>

            <div data-aos="fade-up" className="model_xl" onClick={(e) => e.stopPropagation()}>

                <div className="header_top_model">
                    <div className="text text-2xl single-line-title text_semibold">{project?.data?.title}</div>
                    <button className="text text-base my_start_5" type="button" onClick={onClose}><X/></button>
                </div>
                <div className="content_model scroll">
                    <div className="header_model_xl">                        
                        <div className="image_model_xl">
                            <CarouselImages images={project?.data?.images_details} />
                        </div>
                    </div>

                    <div className="info_project_model my_start_1">
                        <div className="flex_between_start">
                            <div className="text text-xl single-line-title text-medium">{project?.data?.title}</div>
                            <div className="flex_start_center my_start_4 other">
                                <LikeProject project={project?.data?.id} count={project?.data?.likes_count}/>
                                <div className="slach"></div>
                                <div className="flex_start_center gap_6">
                                    <Eye className="text text-base" size={20}/>
                                    <div className="text text-base">{project?.data?.views_count || 0}</div>
                                </div>
                            </div>
                        </div>

                        <section className="text text-base my_start_5">{project?.data?.description}</section>
                        
                        <div className="details_project my_start_10">
                            <div className="flex_between_center">
                                <div className="text text-sm text_secoundary border border_secoundary py_1 px_12 radius_30">
                                    {project?.data?.type_details?.title}
                                </div>
                                <div className="flex_start_center">
                                    {project?.data?.github_url && (
                                        <a href={project?.data?.github_url} className="flex_start_center gap_6 pointer" target="_blank" rel="noopener noreferrer">
                                            <Github className="text text-base" size={19}/>
                                            <div className="text text-base hidden_text"> Githib </div>
                                        </a>
                                    )}
                                    {project?.data?.demo_url && (
                                        <>
                                        <div className="slach"></div>
                                        <a href={project?.data?.demo_url} className="flex_start_center gap_6 pointer" target="_blank" rel="noopener noreferrer">
                                            <Eye className="text text-base" size={19}/>
                                            <div className="text text-base hidden_text"> Privews </div>
                                        </a>
                                        </>
                                    )}
                                    {project?.data?.video_url && (
                                        <>
                                        <div className="slach"></div>
                                        <a href={project?.data?.video_url} className="flex_start_center gap_6 pointer" target="_blank" rel="noopener noreferrer">
                                            <Youtube className="text text-base" size={19}/>
                                            <div className="text text-base hidden_text"> Video </div>
                                        </a>
                                        </>
                                    )}
                                                                       
                                </div>
                                
                            </div>
                        </div>

                        <div className="hr_primary"></div>

                        
                        <div className="skills_project ">
                            <div className="text text-lg text-medium my_end_6">Skills</div>
                            <SkillsProject skills={project?.data?.skills_details} />
                        </div>

                        <div className="hr_primary"></div>

                        <div className="my_end_20">
                            <div className="text text-lg text-medium">Details </div>
                            <div className="text text-base my_start_4"> {project?.data?.details} </div>
                        </div>
                        
                        <div className="hr_primary"></div>

                        <div className="flex_center_center gap_10 my_end_20">
                            {project?.data?.demo_url && (
                                <Link to={project?.data?.demo_url} className="btn btn_md btn_primary flex_center_center radius_30 gap_6" 
                                    target="_blank" rel="noopener noreferrer">
                                    <Eye size={19} className="text_light"/>
                                    Privews
                                </Link>
                            )}
                            {project?.data?.github_url && (
                                <Link to={project?.data?.github_url}  className="btn btn_md btn_info flex_center_center radius_30 gap_6" 
                                    target="_blank" rel="noopener noreferrer">
                                    <Github size={19} className="text_light"/>
                                    Github
                                </Link>
                            )}
                            {project?.data?.video_url && (
                                <Link to={project?.data?.video_url} className="btn btn_md btn_danger flex_center_center radius_30 gap_6" 
                                    target="_blank" rel="noopener noreferrer">
                                    <Youtube size={19} className="text_light"/>
                                    Youtube
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>

        </article>

        </AnimatePresence>
    )
}