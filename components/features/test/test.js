import React from 'react'
import PropTypes from 'prop-types'

const Test = (props) => {

  const { title } = props.customFields

  return (
    <div className='movie-detail col-sm-12 col-md-8'>
      <h1>{title}</h1>
    </div>
  )
}

Test.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string,
  })
}

export default Test 