

import { createBrowserRouter } from "react-router-dom" 
import Layout from "../views/layouts/layout" 
import Index from "../views/pages/index" 
import ScreenProjects from "../views/pages/ScreenProjects"
import ScreenSkills from "../views/pages/ScreenSkills"
import ROUTES from '/src/routers/path'
import NotFoundScreen from "../views/pages/NotFoundScreen"
import ErrorPage from "../views/pages/ErrorPage"
import RootLayout from "./RootLayout"

export const RouterUrl = createBrowserRouter([
    {
        element: <RootLayout />, 
        children: [
            {
                element: <Layout />,
                children: [
                    { path: ROUTES.HOME, element: <Index /> },
                ]
            },  
            {path: ROUTES.SKILLS, element: (<ScreenSkills />),},
            {path: ROUTES.PROJECTS, element: (<ScreenProjects />),},      
            { path: "*",  element: <NotFoundScreen /> },
        ],
    },
    // route error page without RootLatout
    { path: ROUTES.ERROR,  element: <ErrorPage /> },
]);

export default RouterUrl;

