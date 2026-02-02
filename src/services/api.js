import axios from "axios";


// axios.defaults.withCredentials = true ;  
axios.defaults.xsrfCookieName = 'csrftoken' ;
axios.defaults.xsrfHeaderName = 'X-CSRFToken' ;


const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000, 
});




 
export default api ;
