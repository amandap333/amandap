
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const WorkPage = () => (
  <Layout>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
    />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
