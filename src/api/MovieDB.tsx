import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '4fd5b27e959aa0e75461ad2103240d93',
    language: 'es-ES',
  },
});

export default movieDB;
