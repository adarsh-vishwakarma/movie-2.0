import axios from "axios";
import Authorization from "../config";

const instace = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGNhY2E1Y2ExZGM3ZDk0NDAyZmVhYjU2ODFjYmU5NiIsIm5iZiI6MTcyNDQ4OTc1MS44MjYyMjcsInN1YiI6IjY2YmYwYmQzZTg1NDMzODhhZTkyZmE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dGw6zYxRsi-3i7pztdn6iwzXu5emRmKe4vAptEHkN18'
      },
});

export default instace;