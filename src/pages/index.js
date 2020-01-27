import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="This is a new description for the index page"
    />
    <div 
      style={{ 
        margin: `3rem auto`, 
        maxWidth: 600 
        
      }}
    >
      test
    </div>
    <h1>Amanda Marie Proffit</h1>
    <p>Hello</p>
    <p>Thank you </p>
  </Layout>
)


export default IndexPage
