// import icon
import { FileCheck  } from 'lucide-react';
// import motion animation
import { motion } from "framer-motion" ;
// import portfolio context
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";
// import waves bottion svg
import WaveBottom from "../../assets/svg/wavebottom.svg"
export default function Hero() {
    // Get user data from context provider
    const {user} = useContext(PortfolioContext);
    return (
        <section className="hero_secrion" id="hero"> 
            
            <article className="block_waves">
            <div className="container">
                <div className="content_hero flex_center_center">
                     <div className="hero_start">
                        <div className="text badge_primary m_auto text-sm text_sm_dark"> Let’s Build Something Great Together </div>
                        <div className="flex_center_center gap_10 my_start_25">
                            <motion.div className="text text_section text-center text-semibold text_base_dark" 
                                        initial={{ scale: 0.8, opacity: 0 }} 
                                        animate={{ scale: 1, opacity: 1 }} 
                                        transition={{ duration: 1.5 }}>
                                 I'm <span className="text_primary">{user?.first_name} {user?.last_name} </span> a {user?.profile.job_title} 
                            </motion.div>
                        </div>
                        <motion.div className="text text-base my_start_25 text-center text_sm_dark" 
                                    initial={{ opacity: 0, y: 40 }} 
                                    animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
                                    {user?.profile?.bio}
                        </motion.div>
                        <div className="flex_center_center gap_20 my_start_30">
                            {user?.profile?.cv_file && (
                                <motion.a href={user?.profile?.cv_file}
                                    target="_blank"
                                    className="btn btn_primary btn_lg radius_30 flex_center_center gap_6" 
                                    type="button" rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                                    <FileCheck  size={18}/>
                                    Download CV (PDF)
                                </motion.a>
                            )}
                        </div>
                    </div> 
                </div> 
                <div className="overlay"></div>
            </div>
            </article>
            <img src={WaveBottom} alt="" className="w_10 wave_bottom" />
        </section>
    )
}