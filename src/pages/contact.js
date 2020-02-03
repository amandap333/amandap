import React from "react"


import Layout from "../components/layout"
import SEO from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactPage = ({ location }) => {
  const handleFormSubmit = (e) => {

  }
  
  return (
    <Layout location={location}>
      <SEO 
        title="Home" 
        description="This is a new description for the index page"
      />
      <Container>
      <Row>
          <Col>
            <h1>Contact me!</h1>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Send me a message!</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage
