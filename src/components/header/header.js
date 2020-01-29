import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './header.scss'


const Header = ({ siteTitle, location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allNavigationJson {
        edges {
          node {
            title
            path
          }
        }
      }
    }
  `)

  const navigationData = data.allNavigationJson.edges
  
  return (
    <header className="header" >
      <Navbar  bg="secondary" expand="lg">
        <Link className="navbar-brand" to="/">{siteTitle}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="/" className="flex-column flex-md-row text-center justify-content-between">
            <Link className="navbar-brand" to="/">{siteTitle}</Link>
            {
              navigationData.map((edge, index) => {
                const path = edge.node.path
                const title = edge.node.title
                console.log(location)
                return (
                  <Link 
                    key={index}
                    to={path}
                    className={
                      location.pathname === path
                      ?
                        `nav-link active disabled`
                      :
                        `nav-link`
                    }
                  >
                    {title}
                  </Link>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
