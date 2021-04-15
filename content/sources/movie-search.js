// import { OMDB_API_KEY } from 'fusion:environment'
const OMDB_API_KEY = "f8127d89";

const resolve = (query) => {
  let requestUri = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query.movieQuery}`;

  requestUri = (query.hasOwnProperty('page'))
    ? `${requestUri}&page=${query.page}`
    : requestUri;

  console.log("requestUri", requestUri);
  return requestUri;
}

export default {
  resolve,
  schemaName: 'movies',
  params: {
    movieQuery: 'text'
  }
}