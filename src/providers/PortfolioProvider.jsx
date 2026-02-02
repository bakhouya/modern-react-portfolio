import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProjects, getSkills, getServices, getCertificate } from "../services/trackService";

export const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {

    const projectsQuery = useQuery({queryKey: ["projects"], queryFn: getProjects,});
    const skillsQuery = useQuery({queryKey: ["skills"], queryFn: getSkills,});
    const certificatesQuery = useQuery({queryKey: ["certificates"], queryFn: getCertificate,});
    const servicesQuery = useQuery({queryKey: ["services"], queryFn: getServices,});

    const isLoading =
        projectsQuery.isLoading ||
        skillsQuery.isLoading ||
        certificatesQuery.isLoading ||
        servicesQuery.isLoading ;

    if (isLoading) {
          return (
              <div className='container_loader'>
                  {/* <div className="loader"></div> */}
                  <div class="lds-ripple"><div></div><div></div></div>
              </div>
          );
    }


    return (
      <PortfolioContext.Provider
          value={{
              projects: projectsQuery.data,
              skills: skillsQuery.data,
              certificates: certificatesQuery.data,
              services: servicesQuery.data,
          }}>
        {children}
      </PortfolioContext.Provider>
    );
}
