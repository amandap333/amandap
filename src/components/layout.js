/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header/header'
import Footer from './footer/footer'

import 'typeface-open-sans'
import '../global-scss/index.scss'


const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Header location={location} />
      <main>{children}</main>
      <Footer location={location} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
