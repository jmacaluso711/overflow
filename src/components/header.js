import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="text-red-500"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav style={{ marginLeft: 'auto' }}>
        <Link
          to="/get-started">
          Blog
        </Link>
        <Link
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-8"
          to="/get-started">
          Get Started
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
