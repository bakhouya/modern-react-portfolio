import axios from "axios";
 
axios.defaults.xsrfCookieName = 'csrftoken' ;
axios.defaults.xsrfHeaderName = 'X-CSRFToken' ;

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000, 
});




 
export default api ;
