import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


const Sitemap = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SitemapQuery {
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
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <p className="lead text-center">
            Sitemap
          </p>
          <Nav defaultActiveKey="/" className="flex-column flex-md-row text-center justify-content-between">
            {
              navigationData.map((edge, index) => {
                const path = edge.node.path
                const title = edge.node.title
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
        </Col>
      </Row>
    </Container>
  )
}

export default Sitemap
