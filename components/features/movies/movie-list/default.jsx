import PropTypes from 'prop-types'
import Consumer from 'fusion:consumer'
// import { useContent } from "fusion:content";
import React, { Fragment, Component } from 'react'

import './style.scss'

@Consumer
class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = { movies: [], page: 1 }
    this.fetch()
  }

  // This component lifecycle method will only be invoked on the client side
  // See: https://secure.tgam.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/isomorphic-server-spa-rendering.md
  // componentDidMount () {
  //   console.log("Waiting...");
  //   window.setTimeout(() => {
  //     console.log("Loading...");
  //     this.fetch()
  //   }, 1500)
  // }

  fetch () {
    // We're destructuring the `contentService` and `contentConfigValues` keys out of the `movieListConfig` prop inside `this.props.customFields`...
    const { contentService, contentConfigValues } = this.props.customFields.movieListConfig;
    console.log("Loading...");
    console.log(contentConfigValues);

    // Grab the movie title from global content and alter the query
    const { Title } = this.props.globalContent || {}
    if (Title) {
      contentConfigValues.movieQuery = Title;
    }
    console.log(contentConfigValues);

    // let stories = useContent({
    //   source: contentService,
    //   query: Object.assign(contentConfigValues, { page: this.state.page })
    // });
    // console.log(stories);

    // ...then we can use these values to replace our hardcoded content source name with `contentService` and our query object with `contentConfigValues` (merged with the `page` param)
    const { fetched } = this.getContent(contentService, Object.assign(contentConfigValues, { page: this.state.page }), '{ totalResults Search { Title Year Poster imdbID } }')

    fetched.then(response => {
      console.log("Loaded", response);
      if (!response.totalResults) {
        console.log("No results");
        return;
      }
      this.setState({
        // Slice off the first result so it doesn't match movie-detail
        movies: [...this.state.movies, ...response.Search.slice(1)],
        page: this.state.page + 1
      })
    })
  }

  render () {
    // If the window object doesn't exist, we will return an empty Fragment
    // (because we only want to render this component on the client side)
    // if (typeof window === 'undefined') return null

    // Extract the `hideOnMobile` value from props.displayProperties, which we default to an empty object
    const { hideOnMobile } = this.props.displayProperties || {}
    // Before anything else, if hideOnMobile is true, we return null so nothing else gets rendered
    if (hideOnMobile) return null
    
    const { movies } = this.state
    return (
      <Fragment>
        <h2>Movies</h2>
        <div>
          {movies && movies.map((movie, idx) => {
            const showImage = movie.Poster && movie.Poster !== "N/A";

            return <div className="movie" key={`movie-${idx}`}>
              <h4>{movie.Title}</h4>
              <p><strong>Year:</strong> {movie.Year}</p>

              {showImage && <img src={movie.Poster} className='image-sm' />}
              {!showImage && <p>No image</p>}
            </div>
          })}
          <button className="c-button c-button--utility-primary--red more-button" onClick={() => { this.fetch() }}>More</button>
        </div>
      </Fragment>
    )
  }
}

MovieList.propTypes = {
  customFields: PropTypes.shape({
    // We're using the Fusion-specific PropType `contentConfig` and passing it the name(s) of the GraphQL schemas this component will work with
    movieListConfig: PropTypes.contentConfig('movies')
  })
}

export default MovieList