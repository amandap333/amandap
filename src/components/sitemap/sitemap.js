import React from 'react'
import { Link, useStaticQuery } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


const Sitemap = ({location}) => {
  const data = useStaticQuery(graphql`
    query SitemapQuery {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  // console.log(data)
  // console.log(data.allSitePage.nodes[0].path)
  const sitemapData = data.allSitePage.nodes
  // console.log(sitemapData)
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <p className="lead text-center">
            Sitemap
          </p>
          <Nav defaultActiveKey="/" className="flex-column flex-md-row text-center justify-content-between">
            {
              sitemapData.map((slug, index) => {
                const title = slug.path.split('/')
                const upperCaseTitle = title[1].charAt(0).toUpperCase() + title[1].substring(1)

                if (slug.path === "/dev-404-page/") {
                  return null
                } else if (slug.path === "/404/") {
                  return null
                } else if (slug.path === "/404.html") {
                  return null
                } else if (slug.path === "/") {
                  return (
                    <Link 
                      key={index}
                      to={slug.path}
                      className={
                        location.pathname === slug.path
                        ?
                          `nav-link active disabled`
                        :
                          `nav-link`
                      }
                    >
                      Home
                    </Link>
                  )
                }
                return(
                  <Link
                    key={index}
                    to={slug.path}
                    className={
                      location.pathname === slug.path
                      ?
                        `nav-link active disabled`
                      :
                        `nav-link`
                    }
                  >
                    {upperCaseTitle}
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
