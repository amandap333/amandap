import React from 'react'
import { useStaticQuery, graphql }from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


const Familycards =({ location }) => {
  const data = useStaticQuery(graphql`
    query FamilyCardsQuery {
      allFamilyDataJson {
        edges {
          node {
            job
            hobbies
            image
            name
          }
        }
      }
    }
  `)

  console.log(data.allFamilyDataJson.edges)

  const familyInfo = data.allFamilyDataJson.edges
  
  return (
    <Container fluid >
      <Row>
          {
            familyInfo.map((edge, index) => {
              const job = edge.node.job
              const hobbies = edge.node.hobbies
              const image = edge.node.image   
              const name= edge.node.name                   
              return (
                <Col md={6} lg={4} >
                  <Card key={index}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                        <p className="card-text">{job}</p>
                        <p className="card-text">{hobbies}</p>
                        <p className="card-text">{image}</p>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
          )}
      </Row>
    </Container>
  )
}

export default Familycards

