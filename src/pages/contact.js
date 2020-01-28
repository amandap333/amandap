import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ContactPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO 
        title="Home" 
        description="This is a new description for the index page"
      />
      <Container>
      <Row>
          <Col>
            <h1>Contact me! </h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage
