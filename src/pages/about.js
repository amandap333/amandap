import React from "react"

import Header from "../components/header/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AboutPage = ({location}) => (
  <Layout location={location}>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
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

export default AboutPage