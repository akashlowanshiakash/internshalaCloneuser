import axios from "axios";


const instance = axios.create({
    baseURL: "https://internshala-naqm.onrender.com",
    // baseURL: "http://localhost:8080",
    withCredentials: true,
    // headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    // }
});

export default instance;
