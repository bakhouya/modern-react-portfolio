
import { useEffect } from "react";
import RouterUrl from "./routers/web"
import { RouterProvider} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";


function App() {

    useEffect(() => {
      AOS.init({ duration: 1000});
    }, []); 

    return (       
        <RouterProvider router={RouterUrl}></RouterProvider>     
    )

}

export default App
