import axios from "axios";

const api = axios.create({
    baseURL:"https://cbvmanager-api.herokuapp.com/api"
});

export default api;
