

import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { motion, useScroll } from "framer-motion"


const Layout = () => {
    const { scrollYProgress } = useScroll()

    return (


        <>
            <motion.div id="scroll-indicator" style={{
                    scaleX: scrollYProgress, 
                    position: "fixed", 
                    top: 0, left: 0, 
                    right: 0, height: 4, 
                    originX: 0, zIndex: 4000 , 
                    backgroundColor: "#ff6f00",}}/>

            <div className="app">
                <Header />      
                <main className="main-content"> <Outlet /> </main>  
                <Footer />
            </div>
        </>


    );
    
};

export default Layout;