

import { createBrowserRouter } from "react-router-dom" 
import Layout from "../views/layouts/layout" 
import Index from "../views/pages/index" 
import ScreenProjects from "../views/pages/ScreenProjects"
import ScreenSkills from "../views/pages/ScreenSkills"
import ROUTES from '/src/routers/path'
import NotFoundScreen from "../views/pages/NotFoundScreen"

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
    { path: "*", element: <NotFoundScreen /> },
]);

export default RouterUrl;


