
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion" ;
import flaticon from '../../assets/images/flaticon.jpg' ; 
import { useTrack } from '../../providers/TrackProvider';
import Clicked from "../../utils/Click"
import ROUTES from '/src/routers/path.js'
import {Home, User, Code, FolderKanban, Award, Briefcase} from "lucide-react";

export default function Header(){
    const [hoveredLink, setHoveredLink] = useState(0);
    const { settings } = useTrack() 

   const navLinks = [
        { path: "#hero", label: "Home", icon: <Home size={20} /> },
        { path: "#about", label: "About", icon: <User size={20} /> },
        { path: "#skills", label: "Skills", icon: <Code size={20} /> },
        { path: "#projects", label: "Projects", icon: <FolderKanban size={20} /> },
        { path: "#certificates", label: "Certificates", icon: <Award size={20} /> },
        { path: "#services", label: "Services", icon: <Briefcase size={20} /> },
    ];

    function clicked() {Clicked()}

    return (
        <>
        <motion.header className="header" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
            <div className="header-container">

                <motion.div className="logo"  whileTap={{ scale: 0.95 }} onClick={clicked}>
                    <Link to={ROUTES.HOME} className="logo-link">
                        <img src={settings?.light_logo} className="logo_image" 
                            alt={settings?.title} loading="lazy"
                            onError={(e) => {e.target.src = flaticon}} />
                    </Link>
                </motion.div>


                <nav className="nav">
                    <ul className="nav-list">
                        {navLinks.map((link, index) => (

                        <motion.li key={link.path} className="nav-item" onClick={() => setHoveredLink(index)} whileTap={{ y: 0 }}>
                            <a href={link.path} className="nav-link flex_center_center gap_5" onClick={clicked}>
                                <span className={`text text-base text_nav text-medium ${hoveredLink === index ? 'active' : ''}`}>{link.label}</span>                         
                                {hoveredLink === index && (
                                    <motion.div layoutId="highlight" className="hover_anmate" initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ zIndex: 1 }}/>
                                )}
                            </a>
                        </motion.li>

                        ))}
                    </ul>
                </nav>
    

                <div className="flex_start_center gap_10">
                    <Link to={ROUTES.PROJECTS} className="btn btn_primary btn_lg radius_26 flex_center_center gap_8" 
                        type="button" aria-label='Contact button' onClick={clicked}>
                        <FolderKanban size={17}/>
                        <span className="text_btn">All Projects</span>
                    </Link>
                    
                </div>

            </div>
        </motion.header>
        



        
        <motion.nav className='navigation_phone'>
            {navLinks.map((link, index) => (

                <motion.li key={link.path} className="flex_center_center" onClick={() => setHoveredLink(index)} whileTap={{ y: 0 }}>
                    <a href={link.path} className="nav_link" onClick={clicked}>
                        <span className={`navigate_icon ${hoveredLink === index ? 'active' : ''}`}>{link.icon}</span>   

                        {hoveredLink === index && (
                            <motion.div layoutId="highlight" className="hover_anmate for_navigate" initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                style={{ zIndex: 1 }}/>
                        )}
                    </a>
                </motion.li>

            ))}
        </motion.nav>

        </>
    );
};

