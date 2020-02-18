
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = ({ location }) => {

return (

  <Layout location={location}>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
    />
    <div style={{}}>
    <h1>Resume!</h1>
    <iframe src="amanda_resume.pdf" height="400"></iframe>
    </div>
  </Layout>
)
}

export default WorkPage
