// import meduls createContext & useQuery
import { createContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import functions services api
import {
    GetUser, getProjects, getSkills, getServices, getCertificate, getAbout, getFaqs, GetContent, GetSettingsWeb, trackVisitor
} from "../services/trackService";

import ROUTES from "../routers/path";
// create prortFolio Context
export const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
    //  useQuery functions to get data
    const settingsQuery = useQuery({queryKey: ["settings"], queryFn: GetSettingsWeb});
    useEffect(() => {
        if (settingsQuery.data) {
            const settingsData = settingsQuery.data;
            
            if (settingsData.title) {
                document.title = settingsData.title;
            }
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && settingsData.description) {
                metaDescription.setAttribute('content', settingsData.description);
            }
            const metaFavicon = document.querySelector('link[rel="icon"]');
            if (metaFavicon && settingsData.favicon) {
                metaFavicon.setAttribute('href', settingsData.favicon);
            }
            const metaOgTitle = document.querySelector('meta[property="og:title"]');
            if (metaOgTitle && settingsData.title) {
                metaOgTitle.setAttribute('content', settingsData.title);
            }           
            const metaOgDescription = document.querySelector('meta[property="og:description"]');
            if (metaOgDescription && settingsData.description) {
                metaOgDescription.setAttribute('content', settingsData.description);
            }
        }
    }, [settingsQuery.data]);

    const visitorQuery = useQuery({
        queryKey: ["visitor"],
        queryFn: async () => {
            
            const visitorResponse = await trackVisitor();
             if (visitorResponse?.visitor?.key && typeof window !== "undefined") {
                // Save localStorage Visitor key
                try {
                    localStorage.setItem('visitor', JSON.stringify(visitorResponse));
                } catch (error) {console.log("localStorage not available");}
                // Save Cookie Visitor key
                try {
                    document.cookie = `visitor_hash=${visitorResponse.visitor.key}; path=/; SameSite=Lax`;
                } catch (error) {console.log("Cookie blocked");}
            }
            
            return visitorResponse ;
        }
    });
    const userQuery = useQuery({queryKey: ["user"], queryFn: GetUser,});
    const contentQuery = useQuery({queryKey: ["content"], queryFn: GetContent,});
    const projectsQuery = useQuery({queryKey: ["projects"], queryFn: getProjects});
    const skillsQuery = useQuery({queryKey: ["skills"], queryFn: getSkills,});
    const certificatesQuery = useQuery({queryKey: ["certificates"], queryFn: getCertificate,});
    const servicesQuery = useQuery({queryKey: ["services"], queryFn: getServices,});
    const aboutQuery = useQuery({queryKey: ["abouts"], queryFn: getAbout,});
    const faqQuery = useQuery({queryKey: ["faqs"], queryFn: getFaqs,});
    const refetchAll = () => {
        settingsQuery.refetch();
        visitorQuery.refetch();
        userQuery.refetch();
        contentQuery.refetch();
        projectsQuery.refetch();
        skillsQuery.refetch();
        certificatesQuery.refetch();
        servicesQuery.refetch();
        aboutQuery.refetch();
        faqQuery.refetch();
    };
    // handler loading before get data
    const isLoading =
        settingsQuery.isLoading ||
        visitorQuery.isLoading ||
        contentQuery.isLoading ||
        projectsQuery.isLoading ||
        skillsQuery.isLoading ||
        certificatesQuery.isLoading ||
        aboutQuery.isLoading ||
        userQuery.isLoading ||
        faqQuery.isLoading ||
        servicesQuery.isLoading ;

    const isError =
        settingsQuery.isError ||
        !settingsQuery.data ||
        userQuery.isError ||
        !userQuery.data ||          
        contentQuery.isError ||
        !contentQuery.data ||       
        projectsQuery.isError ||
        !projectsQuery.data ||      
        skillsQuery.isError ||
        !skillsQuery.data ||
        certificatesQuery.isError ||
        !certificatesQuery.data ||
        servicesQuery.isError ||
        !servicesQuery.data ||
        aboutQuery.isError ||
        !aboutQuery.data ||
        faqQuery.isError ||
        !faqQuery.data;

    //  check if loading return loading component
    if (isLoading) {
          return (
              <div className='container_loader'>
                  {/* <div className="loader"></div> */}
                  <div className="lds-ripple"><div></div><div></div></div>
              </div>
          );
    }
    // if any error redirect to page error 
    if (isError) {
        window.location.href = ROUTES.ERROR
        return null
    }


    return (
      <PortfolioContext.Provider
          value={{
              settings: settingsQuery.data,
              visitor: visitorQuery.data,
              content: contentQuery.data,
              user: userQuery.data,
              projects: projectsQuery.data,
              abouts: aboutQuery.data,
              skills: skillsQuery.data,
              certificates: certificatesQuery.data,
              services: servicesQuery.data,
              faqs: faqQuery.data,

              refetchAll, 
              isLoading,
          }}>
        {children}
      </PortfolioContext.Provider>
    );
}
