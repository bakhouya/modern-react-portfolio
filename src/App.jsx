
import { useEffect } from "react";
import RouterUrl from "./routers/web"
import { RouterProvider} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { TrackProvider } from './providers/TrackProvider' ;
import { PortfolioProvider } from "./providers/PortfolioProvider";



function App() {

    useEffect(() => {
      AOS.init({ duration: 1000});
    }, []); 

    return (
      
        <TrackProvider>
            <PortfolioProvider>
                <RouterProvider router={RouterUrl}></RouterProvider>
            </PortfolioProvider>
        </TrackProvider>
      
    )

}

export default App
