

import api from "./api" ;



export const trackVisitor = async () => {
    try {
        const response = await api.get('/visitors/track/');
        return response.data ;        
    } catch (error) {
        console.error('Error tracking visitor:', error);
        return null ;
    }
};
export const GetSettingsWeb = async () => {
    try {
        const response = await api.get("/public/platform/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Settings:', error);
        return null ;
    }
};
export const GetUser = async () => {
    try {
        const response = await api.get("/public/accounts/user/data/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get User Data:', error);
        return null ;
    }
};
export const GetContent = async () => {
    try {
        const response = await api.get("/public/content/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get User Data:', error);
        return null ;
    }
};



export const getProjects = async () => {
    try {
        const response = await api.get("/public/projects/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Projects:', error);
        return null ;
    }
};

export const likeProject = async (project, visitor) => {    
    try {
        const response = await api.post(`/public/projects/${project}/like/`, { visitor: visitor });
        return response.data ;       
    } catch (error) {
        console.error('Error Like Projects:', error);
        return null ;
    }
};


export const getSkills = async () => {
    try {
        const response = await api.get("/public/skills/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get Skills:', error);
        return null ;
    }
};
export const getServices = async () => {
    try {
        const response = await api.get("/public/services/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get services:', error);
        return null ;
    }
};
export const getCertificate = async () => {
    try {
        const response = await api.get("/public/certificates/") ;
        return response.data ;       
    } catch (error) {
        console.error('Error Get certificates:', error);
        return null ;
    }
};
