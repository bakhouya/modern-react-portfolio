
import { Heart, Eye, Github, X, Youtube} from "lucide-react"
import { Link } from "react-router-dom"
import {ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Clicked from "../../utils/Click";
import LikeProject from "./Like"


export default function DetailProject({data, onClose }) {
    const [carousel, setCarousel] = useState(0)
    function Next(){
        Clicked()
        carousel < data?.images_details.length  - 1 ? setCarousel(carousel + 1) : setCarousel(0)
    }
    function prev(){
        Clicked()
        carousel > 0 ? setCarousel(carousel - 1): setCarousel(data?.images_details.length - 1)
    }
    return (
        <AnimatePresence>
        
        
        <article className="model">
            <motion.article className="model_opacity" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        onClick={onClose}/>

            <motion.div data-aos="zoom-in" className="model_xl" onClick={(e) => e.stopPropagation()}>

                <div className="content_model scroll">
                    <div className="header_model_xl">
                        
                        <div className="image_model_xl">
                            <button className="circle circle_1 flex_center_center" 
                                onClick={prev} type="button" arie-label="privew-carousel">
                                <ChevronLeftCircle size={34} className="text text_primary"/>
                            </button>
                            <button className="circle circle_2 flex_center_center" 
                                    onClick={Next} type="button" arie-label="pnext-carousel">
                                <ChevronRightCircle size={34} className="text text_primary"/>
                            </button>
                            <img src={data?.images_details[carousel].image} alt={data?.title} loading="lazy" />

                        </div>
                    </div>

                    <div className="info_project_model my_start_1">
                        <div className="flex_between_start">
                            <div className="text text-xl single-line-title text-medium">{data?.title}</div>
                            <div className="flex_start_center my_start_4 other">
                                {/* <div className="flex_start_center gap_4 pointer">
                                    <Heart className="text text-base" size={20}/>
                                    <div className="text text-base"> {data?.likes_count || 0} </div>
                                </div> */}
                                <LikeProject project={data?.id} count={data?.likes_count} isLike={data?.is_liked}/>
                                <div className="slach"></div>
                                <div className="flex_start_center gap_6">
                                    <Eye className="text text-base" size={20}/>
                                    <div className="text text-base">{data?.views_count || 0}</div>
                                </div>
                            </div>
                        </div>

                        <section className="text text-base my_start_5">{data?.description}</section>
                        
                        <div className="details_project my_start_10">
                            <div className="flex_between_center">
                                <div className="flex_start_center">
                                    <a href={data?.github_url} className="flex_start_center gap_6 pointer" target="_blank" rel="noopener noreferrer">
                                        <Github className="text text-base" size={19}/>
                                        <div className="text text-base"> Githib </div>
                                    </a>
                                    <div className="slach"></div>
                                    <a href={data?.demo_url} className="flex_start_center gap_6 pointer" target="_blank" rel="noopener noreferrer">
                                        <Eye className="text text-base" size={19}/>
                                        <div className="text text-base"> Privews </div>
                                    </a>
                                    <div className="slach"></div>
                                    <a href={data?.video_url} className="flex_start_center gap_6 pointer" target="_blank" rel="noopener noreferrer">
                                        <Eye className="text text-base" size={19}/>
                                        <div className="text text-base"> Video </div>
                                    </a>
                                </div>
                                <div className="text text-sm text_secoundary">{data?.type_details?.title}</div>
                            </div>
                        </div>

                        <div className="hr_primary"></div>

                        <div className="skills_project ">
                            <div className="text text-lg text-medium">Skills</div>
                            <div className="flex_start_center gap_10 my_start_8">
                                {data?.skills_details?.map(skill => (
                                    <div key={skill.id} className="border px_10 py_4 radius_5 flex_center_center gap_6">
                                        <img src={skill?.icon} alt={skill?.title} className="avatar_xs"/>
                                        <div className="text text-xs">{skill?.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hr_primary"></div>

                        <div className="my_end_20">
                            <div className="text text-lg text-medium">Details </div>
                            <p className="text text-base my_start_4"> {data?.details} </p>
                        </div>
                        
                        <div className="hr_primary"></div>

                        <div className="flex_center_center gap_10 my_end_30">
                            <Link to={data?.demo_url} className="btn btn_md btn_primary flex_center_center radius_30 gap_6" 
                                 target="_blank" rel="noopener noreferrer">
                                <Eye size={19} className="text_light"/>
                                Privews
                            </Link>
                            <Link to={data?.github_url}  className="btn btn_md btn_info flex_center_center radius_30 gap_6" 
                                 target="_blank" rel="noopener noreferrer">
                                <Github size={19} className="text_light"/>
                                Github
                            </Link>
                            <Link to={data?.video_url} className="btn btn_md btn_danger flex_center_center radius_30 gap_6" 
                                target="_blank" rel="noopener noreferrer">
                                <Youtube size={19} className="text_light"/>
                                Youtube
                            </Link>
                        </div>
                    </div>
                </div>
                
            </motion.div>

        </article>

        </AnimatePresence>
    )
}