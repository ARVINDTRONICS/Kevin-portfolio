import PropTypes from 'prop-types'
import React from 'react'
import ProfileImage from '../images/profile-image.jpeg'
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <img
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          src={ProfileImage}
        ></img>
      </span>
    </div>
    =
    <div className="content">
      <div className="inner">
        <h1>Kevin Arvind Suresh</h1>
        <h3>Instrumentation And Automation Engineer </h3>
        <h5>Chennai,India</h5>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Study
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
