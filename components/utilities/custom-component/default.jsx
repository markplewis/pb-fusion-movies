import React, { Component } from 'react'

import "./style.scss";

import svgSprite from "tgam-patterns/assets/patterns/images/member-centre-sprite.svg";
import photoImg from "tgam-patterns/assets/patterns/images/stockcalc-logo.png";
import photoSVG from "tgam-patterns/assets/patterns/images/flag-can.svg";

class CustomComponent extends Component {
  render() {
    const heading = 'Hello world'

    return (
      <div className="custom-component">
        <h3>{heading}</h3>

        <img src={photoImg} width="100" />
        <img src={photoSVG} width="100" />
        
        <button className="c-button c-button--white-primary" type="button">
          <svg className="c-button__icon" role="img" pointerEvents="none" focusable="false" aria-hidden="true">
            <use xlinkHref={svgSprite + "#icon-calc"} />
          </svg>
          <span className="c-button__text">Button text</span>
        </button>

      </div>
    )
  }
}

export default CustomComponent
