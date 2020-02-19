import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AnimalsQuery {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "animals"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                
              }
            }
          }
        }
      }
    }
  `)
  const animalPictures = data.allFile.edges

  return (
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
          <h2>PPCC Graduate 2020</h2>
          <p style={{color:'black'}} className="center">
            Orginally from North Carolina, I moved to Colorado in 2014.
            I am currently employed with BSCS Science Learning. I love animals and have 2 cats, 2 dogs and 2 rabbits. My cats names are Setrene and Khalessi. My dogs names are Zeus and Daisy. My husband named my rabbits, and they are Steve and Lily. My husband and I have a daughter named Naomi and she has the best laugh. Current GPA:3.5
          </p>
          <div>
          {
            animalPictures.map((edge, index) => {
              return (
                <Img 
                  key={index} 
                  fluid={edge.node.childImageSharp.fluid} 
                  className="smallPicture purpleBorder"
                />
              )
            })
          }
        </div>
        </div>

        </Col>
      </Row>
    </Container>
  </Layout>
  )
}

export default AboutPage