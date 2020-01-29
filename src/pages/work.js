
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const WorkPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
    />
    <h1>About</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default WorkPage
