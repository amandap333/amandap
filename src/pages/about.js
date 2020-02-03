import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AboutPage = ({ location }) => (
  <Layout location={location} >
    <SEO
      title="About"
      metadata="About me!"
      description="About Amanda Proffit"
    />
  <Container fluid>
      <Row>
        <Col>
        <h1>About Amanda Proffit</h1>
        <div>
          <p>PPCC Graduate 2020 of CIS and AGS</p>
          <p>
            I am currently employed with BSCS Science Learning. I love animals and have 2 cats, 2 dogs and 2 rabbits. My cats names are Setrene and Khalessi. My dogs names are Zeus and Daisy. My husband named my rabbits, and they are Steve and Lily. My husband and I have a daughter named Naomi and she has the best laugh. I currently obtain a 3.5 GPA.
          </p>
        </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage