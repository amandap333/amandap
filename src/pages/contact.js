import React from "react"

import Layout from "../components/layout"
import SEO from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Contact from '../components/form/Contact'


const ContactPage = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO 
        title="Home" 
        description="This is a new description for the index page"
      />
      <Container>
      <Row>
          <Col>
            <h1 className="centerText">Contact me!</h1>
            <Contact/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage
