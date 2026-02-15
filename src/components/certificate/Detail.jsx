

import { Eye, Github, X, Youtube, ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Clicked from "../../utils/Click";

export default function DetailCertificates({data, onClose }) {

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
                    <div className="text text-2xl single-line-title text_semibold">{data?.title}</div>
                    <button className="text text-base my_start_5" type="button" onClick={onClose}><X/></button>
                </div>
                <div className="content_model scroll">
                    <div className="header_model_xl">                        
                        <div className="image_model_xl">
                            <img src={data?.image} className="image_project" alt={data?.title} loading="lazy" /> 
                        </div>
                    </div>

                    <div className="info_project_model my_start_1">
                        <div className="flex_between_start">
                            <div className="text text-xl text-medium">{data?.title}</div>
                        </div>
                        
                        <div className="flex_between_start p_8 radius_10 bg_base my_start_4">
                            <div className="text text-sm">
                                Organized By: <span className="text text-bold">{data?.issuing_organization}</span>
                            </div>
                            <div className="text text-sm">{data?.expiration_date}</div>
                        </div>
                        <div className="hr_primary"></div>
                        <div className="text text-base my_start_4" style={{ whiteSpace: 'pre-wrap' }}> {data?.description} </div>

                    </div>
                </div>
                <div className="p_10 footer_model">
                    <Link to={data?.credential_url} className="btn btn_md w_10 btn_primary flex_center_center radius_30 gap_6" 
                            target="_blank" rel="noopener noreferrer">
                            <Eye size={19} className="text_light"/>
                            Validate
                    </Link>
                </div>
                
            </div>

        </article>

        </AnimatePresence>
    )
}