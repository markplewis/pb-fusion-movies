import Consumer from 'fusion:consumer'
import React, { Component } from 'react'

@Consumer
class ArticleBody extends Component {
  constructor (props) {
    super(props)
    this.state = { foo: false }
  }

  componentDidMount () {
    console.log("componentDidMount");
  }

  render () {
    console.log("render");

    const { foo } = this.state
    // const { Headlines, Subheadlines, Description, PromoItems } = this.props.globalContent || {}

    return (
      <div className='article-body'>
        <h2>HELLO</h2>
      </div>
    )
  }
}

export default ArticleBody