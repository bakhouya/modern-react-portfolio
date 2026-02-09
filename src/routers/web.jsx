

import { createBrowserRouter } from "react-router-dom" 
import Layout from "../views/layouts/layout" 
import Index from "../views/pages/index" 
import ScreenProjects from "../views/pages/ScreenProjects"
import ScreenSkills from "../views/pages/ScreenSkills"
import ROUTES from '/src/routers/path'

export const RouterUrl = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {path: ROUTES.HOME, element: (<Index />),},
            // {path: ROUTES.PROJECTS, element: (<ScreenProjects />),},
            // {path: ROUTES.SKILLS, element: (<ScreenSkills />),},
        ],
    },
    {path: ROUTES.SKILLS, element: (<ScreenSkills />),},
    {path: ROUTES.PROJECTS, element: (<ScreenProjects />),},
]);

export default RouterUrl;


