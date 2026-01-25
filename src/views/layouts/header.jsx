
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion" ;

const Header = () => {
    const [hoveredLink, setHoveredLink] = useState(0);

    const navLinks = [
        { path: '#home', label: 'Home'},
        { path: '#about', label: 'About'},
        { path: '#skills', label: 'Skills' },
        { path: '#projects', label: 'Projects'},
        { path: '#services', label: 'Services'},
        { path: '#faqs', label: 'Faqs'},
    ];



    return (
        <motion.header className="header" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
        <div className="header-container">

            <motion.div className="logo"  whileTap={{ scale: 0.95 }}>
            <Link to="/" className="logo-link">
                <span className="logo-text">BAKHOUYA</span>
                <span className="text text-sm text_light">Software engineur</span>
    
            </Link>
            </motion.div>


            <nav className="nav">
            <ul className="nav-list">
                {navLinks.map((link, index) => (

                <motion.li key={link.path} className="nav-item" onClick={() => setHoveredLink(index)} whileTap={{ y: 0 }}>
                    <Link to={link.path} className={`nav-link ${setHoveredLink === index ? 'active' : ''}`}>
                        <span className="text text_base text_nav">{link.label}</span>                 
        
                        {hoveredLink === index && (
                            <motion.div
                                layoutId="highlight"
                                className="hover_anmate"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                style={{ zIndex: 1 }}/>
                        )}
                    </Link>
                </motion.li>

                ))}
            </ul>
            </nav>

            <div className="flex_start_center">
                <button className="btn btn_primary btn_lg radius_30">
                    Contact Us
                </button>
            </div>

        </div>
        </motion.header>
    );
};

export default Header;