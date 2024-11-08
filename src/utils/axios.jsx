import axios from "axios";

const instace = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: ""
      },
});

export default instace;