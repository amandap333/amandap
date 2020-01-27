import React from "react"
import { Link } from "gatsby"

import Header from "../components/header/header"
import Layout from "../components/layout"
import SEO from '../components/seo'


const ContactPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO 
        title="Home" 
        description="This is a new description for the index page"
      />
      <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </div>
    </Layout>
  )
}

export default ContactPage
