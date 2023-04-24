import { redirect } from "react-router-dom"
import axios from 'axios';
import { BiMessageSquareDetail } from "react-icons/bi";



const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId="c6770848ad6149c0b58ccb27ec1385d4";
const redirectUri="http://localhost:3000";

const scopes = ["user-library-read","playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;

// "BQB4Aq1lVHcXHMFvjqdKeUvFZpXhOQ-p5pjQDwzlPyDBIH4wnq9xXTdoK8iz9lTlQwarITkWW-SV5KSeFDEH8vq8hWs9zQeV8lBQlKJiu2gcp6bn6ZpzMNat77Hi4G19WzT4WL9tjA_uW9zUWAFs3thWgMoTROwE1y1UJD2iipr8I1PeszgXeNaIGzoHq_PCkuH0QzI-N8HGp64S43V1s_pGFfH1"

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;

     

