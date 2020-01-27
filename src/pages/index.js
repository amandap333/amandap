import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO 
      title="Home" 
      description="This is a new description for the index page"
    />
    <Container>
      <Row>
        <Col>
        <h1>Amanda Marie Proffit</h1>
        <p>Hello</p>
        <p>Thank you</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
