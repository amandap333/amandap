import React from 'react'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Familycards from '../components/famcards'
import Layout from '../components/layout'
import SEO from '../components/seo'


const Family = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO 
        title="Family" 
        description="This is a new description for the index page"
      />
      <Container>
        <Row>
          <Col>
            <Familycards location={location} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Family
