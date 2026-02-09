

import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { motion, useScroll } from "framer-motion"
import { useTrack } from '../../providers/TrackProvider';


const Layout = () => {
    const { scrollYProgress } = useScroll()
    const { loading } = useTrack();

    if (loading) {
        return (
            <div className='container_loader'>
                <div className="loader"></div>
            </div>
        );
    }


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