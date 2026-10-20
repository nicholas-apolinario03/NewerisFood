import axios from "axios";

export const api = axios.create({
    baseURL:
        import.meta.env.VITE_API_URL ??
        "http://localhost:3000",
        headers:{
            "Content-Type": "application/json",
        }
});
//intercepadores para o jwt
api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token_auth");
        if(token){
            config.headers.Authorization = `Beare ${token}`;
        }
        return config;  
    }, (error)=>{return Promise.reject(error)}
);