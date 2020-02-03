
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
    <div>
    <h1>About</h1>
    </div>
    <div>
    <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default WorkPage
