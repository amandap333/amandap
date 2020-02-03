import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "amanda.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} >
      <SEO 
        title="Home" 
        description="This is a new description for the index page"
      />
      <Container justify content max-width="100px" min-height="500px">
        <Row>
          <Col>
            <h1>Amanda Marie Proffit</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p>Hello! Welcome to my site :)</p>
              <p></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
