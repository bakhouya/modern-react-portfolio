

import api from "./api" ;


// track visitor service
export const trackVisitor = async () => {
    try {
        const response = await api.get('/visitors/track/');
        return response.data ;        
    } catch (error) {
        console.error('Error tracking visitor:', error);
        return null ;
    }
};
// get settings data service
export const GetSettingsWeb = async () => {
    try {
        const response = await api.get("/public/platform/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Settings:', error);
        return null ;
    }
};
// get user data service
export const GetUser = async () => {
    try {
        const response = await api.get("/public/accounts/user/data/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get User Data:', error);
        return null ;
    }
};
// get content data service
export const GetContent = async () => {
    try {
        const response = await api.get("/public/content/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get User Data:', error);
        return null ;
    }
};


// get list projects service
export const getProjects = async () => {
    try {
        const response = await api.get("/public/projects/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Projects:', error);
        return null ;
    }
};
// get singal project service
export const getProjectDetail = async (project) => {   
    try {
        const visitor =  JSON.parse(localStorage.getItem("visitor"))
        const response = await api.get(`/public/projects/${project}/`,
            {params: {visitor: visitor?.visitor?.id},}
        );
        return response.data ;      
    } catch (error) {
        console.error('Error Get Singals Project:', error);
        return null ;
    }
    
};
// liked singal project service
export const likeProject = async (project, visitor) => {    
    try {
        const response = await api.post(`/public/projects/${project}/like/`, { visitor: visitor });
        return response.data ;       
    } catch (error) {
        console.error('Error Like Projects:', error);
        return null ;
    }
};

//  get about data service
export const getAbout = async () => {
    try {
        const response = await api.get("/public/accounts/about/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Abouts:', error);
        return null ;
    }
};
//  get skills data service
export const getSkills = async () => {
    try {
        const response = await api.get("/public/skills/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Skills:', error);
        return null ;
    }
};
//  get services data service
export const getServices = async () => {
    try {
        const response = await api.get("/public/services/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get services:', error);
        return null ;
    }
};
//  get certificates data service
export const getCertificate = async () => {
    try {
        const response = await api.get("/public/certificates/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get certificates:', error);
        return null ;
    }
};
//  get faqs data service
export const getFaqs = async () => {
    try {
        const response = await api.get("/public/faqs/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get faqs:', error);
        return null ;
    }
};
