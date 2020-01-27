
import React from "react"
import { Link } from "gatsby"
import styles from "./about-css-modules.module.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}></div>
    <h1>Welcome to my portfolio!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)


export default IndexPage
