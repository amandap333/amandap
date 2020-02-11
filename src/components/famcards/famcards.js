import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Familycards =({ location }) => {
  const data = useStaticQuery(graphql`
    query FamilyCardsQuery {
      allFamilyDataJson {
        edges {
          node {
            job
            hobbies
            name
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const familyInfo = data.allFamilyDataJson.edges

  // console.log(familyInfo[0].node.image.childImageSharp.fluid)
  
  return (
    <Container fluid >
      <Row>
        {
          familyInfo.map((edge, index) => {
            const job = edge.node.job
            const hobbies = edge.node.hobbies 
            const name = edge.node.name
            const image = edge.node.image.childImageSharp.fluid
            const alt = edge.node.alt
            // console.log(edge.node.image.childImageSharp.fluid)

            return (
              <Col md={6} lg={4} key={index} >
                <Card className="border-secondary m-3" style={{minHeight: "40rem"}} >
                  <Img className="card-image" fluid={image} alt={alt} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p className="card-text">{job}</p>
                    <p className="card-text">{hobbies}</p>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Familycards

