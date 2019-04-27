import { OMDB_API_KEY } from 'fusion:environment'

const resolve = (query) => {
  const requestUri = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&plot=full`

  if (query.hasOwnProperty('movieTitle')) return `${requestUri}&t=${query.movieTitle}`

  throw new Error('movie-find content source requires a movieTitle')
}

// const resolve = function resolve (query) {
//   const requestUri = `/content/v3/stories/?canonical_url=${query.canonical_url || query.uri}`

//   return (query.hasOwnProperty('published'))
//     ? `${requestUri}&published=${query.published}`
//     : requestUri
// }

export default {
  resolve,
  params: {
    movieTitle: 'text'
  }
}