
// import useState meduls from react
import { useState } from 'react';
// import Link component from react router
import { Link } from 'react-router-dom';
// import motion for animation
import { motion } from "framer-motion" ;
// import useTrach context
import { useTrack } from '../../providers/TrackProvider';
// import utils Clicked 
import Clicked from "../../utils/Click"
// import routes path
import ROUTES from '/src/routers/path.js'
// import icons
import {Home, User, Code, FolderKanban, Award, Briefcase} from "lucide-react";

export default function Header(){
    // state hover clicked link
    const [hoveredLink, setHoveredLink] = useState(0);
    // Get settings data from useTrack
    const { settings } = useTrack() 
    // List navbar (path, label, icon)
    const navLinks = [
        { path: "#hero", label: "Home", icon: <Home size={20} /> },
        { path: "#about", label: "About", icon: <User size={20} /> },
        { path: "#skills", label: "Skills", icon: <Code size={20} /> },
        { path: "#projects", label: "Projects", icon: <FolderKanban size={20} /> },
        { path: "#certificates", label: "Certificates", icon: <Award size={20} /> },
        { path: "#services", label: "Services", icon: <Briefcase size={20} /> },
    ];
    // clicked function
    function clicked() {Clicked()}

    return (
        <>
        {/*Start Header top for desktop */}
        <motion.header className="header" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
            <div className="header-container">
                {/* Logo */}
                <motion.div className="logo"  whileTap={{ scale: 0.95 }} onClick={clicked}>
                    <Link to={ROUTES.HOME} className="logo-link">
                        {settings?.light_logo
                        ? <img src={settings?.light_logo} className="logo_image" 
                            alt={settings?.title} loading="lazy"
                            onError={(e) => {e.target.src = flaticon}} />
                        : <div className="text text-3xl text_primary text-semibold">Portfolio</div> }
                        
                    </Link>
                </motion.div>
                {/* nav links */}
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
                {/* Action button */}
                <div className="flex_start_center gap_10">
                    <Link to={ROUTES.PROJECTS} className="btn btn_primary btn_lg radius_26 flex_center_center gap_8" 
                        type="button" aria-label='Contact button' onClick={clicked}>
                        <FolderKanban size={17}/>
                        <span className="text_btn">All Projects</span>
                    </Link>
                    
                </div>

            </div>
        </motion.header>
        {/*End Header top for desktop */}

        {/*Start Navigation bottom for phone */}
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
        {/*Start Navigation bottom for phone */}
        </>
    );
};

