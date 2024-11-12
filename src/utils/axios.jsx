import axios from "axios";
import Authorization from "../config";

const instace = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: Authorization
      },
});

export default instace;