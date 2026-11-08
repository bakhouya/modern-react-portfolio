
import { useEffect } from "react";
import RouterUrl from "./routers/web"
import { RouterProvider} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";

import { useGlobalClickSound } from "./utils/useClick";
import ClickSound  from "./assets/son/click.mp3" ;

function App() {
    useGlobalClickSound(ClickSound);
    useEffect(() => {AOS.init({ duration: 1000});}, []); 

    return (<RouterProvider router={RouterUrl}></RouterProvider> )

}

export default App
