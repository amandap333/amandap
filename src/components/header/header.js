import { Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './header.scss'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Sitemap from '../sitemap'


const Header = ({ siteTitle, location }) => (
  <header className="header" >
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>   
          <Link className="nav-link" to="/about">About</Link>  
          <Link className="nav-link" to="/family">Family</Link>   
          <Link className="nav-link" to="/contact">Contact</Link> 
          <Link className="nav-link" to="/work">Work</Link>    
{/* 
            {
            
              navigationData.map((edge, index) => {
                const path = edge.node.path
                const title = edge.node.title
                return(
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
                )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
