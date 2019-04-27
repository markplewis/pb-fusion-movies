import PropTypes from 'prop-types'
import Consumer from 'fusion:consumer'
import React, { Fragment, Component } from 'react'

@Consumer
class MovieDetail extends Component {
  constructor (props) {
    super(props)
    this.state = { isPlotShown: false }
  }

  togglePlot () {
    const { isPlotShown } = this.state
    this.setState({ isPlotShown: !isPlotShown })
  }

  render () {
    const { isPlotShown } = this.state

    const plotButton = (
      <button onClick={this.togglePlot.bind(this)}>
        {isPlotShown ? 'Hide Plot' : 'Show Plot'}
      </button>
    )

    {/* Here, we extract the data we want from `this.props.globalContent`, which we "short circuit" default to an empty object, just in case it doesn't exist */}
    const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = this.props.globalContent || {}

    // We can extract our custom field values here, and even set default values if desired...
    const { moviePrefix = 'Movie', showExtendedInfo = false } = this.props.customFields
 
    {/* Replace the static values with their dynamic equivalents, first checking if each necessary value exists */}
    return (
      <div className='movie-detail'>
        {/* We use the `moviePrefix` value before the Title */}
        <h1><span>{moviePrefix}:</span> {Title || "Not found"}</h1>
        
        {Director && <p><strong>Director:</strong> {Director}</p>}
        {Actors && <p><strong>Actors:</strong> {Actors}</p>}
        {Plot && <p><strong>Plot:</strong> {isPlotShown && Plot} {plotButton}</p>}
        
        {/* we can use our boolean value `showExtendedInfo` to determine if certain data gets displayed or not */}
        {showExtendedInfo &&
          <Fragment>
            {Rated && <p><strong>Rated:</strong> {Rated}</p>}
            {Writer && <p><strong>Writer:</strong> {Writer}</p>}
            {Year && <p><strong>Year:</strong> {Year}</p>}
          </Fragment>
        }        
        {Poster && Title && <img src={Poster} alt={`Poster for ${Title}`} className='image-lg' />}
      </div>
    )
  }
}

MovieDetail.propTypes = {
  customFields: PropTypes.shape({
    moviePrefix: PropTypes.string.isRequired,
    showExtendedInfo: PropTypes.bool
  })
}

// The following would make this component render on the server-side only
// See: https://secure.tgam.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/isomorphic-server-spa-rendering.md
// MovieDetail.static = true

export default MovieDetail