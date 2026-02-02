
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion" ;
import { Github, Home, Settings } from 'lucide-react' ;
import flaticon from '../../assets/images/flaticon.jpg' ; 
import { useTrack } from '../../providers/TrackProvider';

export default function Header(){
    const [hoveredLink, setHoveredLink] = useState(0);
    const { settings } = useTrack() 

    const navLinks = [
        { path: '#hero', label: 'Home', icon: <Home/>},
        { path: '#about', label: 'About'},
        { path: '#skills', label: 'Skills' },
        { path: '#projects', label: 'Projects'},
        { path: '#certificates', label: 'Certificates'},
        { path: '#services', label: 'Services'},
    ];



    return (
        <>
        <motion.header className="header" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
        <div className="header-container">

            <motion.div className="logo"  whileTap={{ scale: 0.95 }}>
                <Link to="/" className="logo-link">
                    <img src={settings?.light_logo} className="logo_image" 
                        alt={settings?.title} loading="lazy"
                        onError={(e) => {e.target.src = flaticon}} />
                </Link>
            </motion.div>


            <nav className="nav">
                <ul className="nav-list">
                    {navLinks.map((link, index) => (

                    <motion.li key={link.path} className="nav-item" onClick={() => setHoveredLink(index)} whileTap={{ y: 0 }}>
                        <a href={link.path} className="nav-link flex_center_center gap_5">
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

                <button className="btn btn_icon_md bg_border radius_30 flex_center_center gap_6" type="button">
                    <Settings size={18}/>
                </button>
                <button className="btn btn_primary btn_md radius_30 flex_center_center gap_6" type="button">
                    <Settings size={18}/>
                    Contact
                </button>
                
            </div>

        </div>
        </motion.header>

        <div className="">
            <a href="https://wa.me/212612345678" className="whatsapp-button" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
                <div className="whatsapp-icon">
                    <Github className='text_light' size={24}/>
                </div>
                <span className="whatsapp-text text text-base text_light">WhatsApp</span>
                <div className="wave-effect"></div>
                <div className="pulse-effect"></div>
            </a>
        </div>
        </>
    );
};

// export default Header;