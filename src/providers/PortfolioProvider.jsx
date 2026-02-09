import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {GetUser, getProjects, getSkills, getServices, getCertificate, getAbout, getFaqs } from "../services/trackService";

export const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {

    const userQuery = useQuery({queryKey: ["user"], queryFn: GetUser,});
    const projectsQuery = useQuery({
          queryKey: ["projects"], 
          queryFn: getProjects, 
          staleTime: 1000 * 60,
          refetchInterval: 1000 * 60,
    });
    const skillsQuery = useQuery({queryKey: ["skills"], queryFn: getSkills,});
    const certificatesQuery = useQuery({queryKey: ["certificates"], queryFn: getCertificate,});
    const servicesQuery = useQuery({queryKey: ["services"], queryFn: getServices,});
    const aboutQuery = useQuery({queryKey: ["abouts"], queryFn: getAbout,});
    const faqQuery = useQuery({queryKey: ["faqs"], queryFn: getFaqs,});

    const isLoading =
        projectsQuery.isLoading ||
        skillsQuery.isLoading ||
        certificatesQuery.isLoading ||
        aboutQuery.isLoading ||
        userQuery.isLoading ||
        faqQuery.isLoading ||
        servicesQuery.isLoading ;

    if (isLoading) {
          return (
              <div className='container_loader'>
                  {/* <div className="loader"></div> */}
                  <div className="lds-ripple"><div></div><div></div></div>
              </div>
          );
    }


    return (
      <PortfolioContext.Provider
          value={{
              user: userQuery.data,
              projects: projectsQuery.data,
              abouts: aboutQuery.data,
              skills: skillsQuery.data,
              certificates: certificatesQuery.data,
              services: servicesQuery.data,
              faqs: faqQuery.data,
          }}>
        {children}
      </PortfolioContext.Provider>
    );
}
