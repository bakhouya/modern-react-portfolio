

import { createBrowserRouter } from "react-router-dom" ;
import Layout from "../views/layouts/layout" ;
import Index from "../views/pages/index" ;

export const RouterUrl = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {path: "/", element: (<Index />),},
        ],
    },
]);

export default RouterUrl;
