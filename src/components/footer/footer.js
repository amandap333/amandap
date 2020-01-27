import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sitemap from '../sitemap/sitemap'


const Footer = ({location}) => {
  return (
    <Container fluid >
      <Row>
        <Col>
          <Sitemap location={location} />
          <p className="text-center">
            © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
