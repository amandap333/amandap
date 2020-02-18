
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = ({ location }) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`)
return (

  <Layout location={location}>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
    />
    <div style={{}}>
    <h1>Resume!</h1>
    </div>
  </Layout>
)
}

export default WorkPage
