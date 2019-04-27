import React, { Component } from 'react'
import Consumer from 'fusion:consumer'
import getProperties from 'fusion:properties'

import CustomComponent from '../../utilities/custom-component/default'

@Consumer
class FooterInfo extends Component {
  render() {
    const siteVars = getProperties(this.props.arcSite)

    return (
      <div>
        <CustomComponent />
        {siteVars.twitter && <a href={`https://twitter.com/${siteVars.twitter}`}>Twitter</a>}
        {siteVars.contactEmail && <a href={`mailto:${siteVars.contactEmail}`}>Contact</a>}
      </div>
    )
  }
}

export default FooterInfo