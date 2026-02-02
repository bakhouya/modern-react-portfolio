
import { useEffect } from "react";
import RouterUrl from "./routers/web"
import { RouterProvider} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { TrackProvider } from './providers/TrackProvider' ;
import { PortfolioProvider } from "./providers/PortfolioProvider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, 
    },
  },
});

function App() {

    useEffect(() => {
      AOS.init({ duration: 1000});
    }, []); 

    return (
      
      <QueryClientProvider client={queryClient}>
        <TrackProvider>
            <PortfolioProvider>
                <RouterProvider router={RouterUrl}></RouterProvider>
            </PortfolioProvider>
        </TrackProvider>
      </QueryClientProvider>
      
    )

}

export default App
