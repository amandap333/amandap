import React from "react"

import Header from "../components/header/header"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default () => (
  <Layout>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
    />
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby"/>
      <Header headerText="It's pretty cool" />
      <p>My name is Amanda Proffit. </p>
    </div>
  </Layout>
)