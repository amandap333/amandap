

<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</link>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
<title> Amanda Proffit Portfolio</title>
</head> 

import React from "react"
import { Link } from "gatsby"
import styles from "./about-css-modules.module.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

<body> 
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

</body> 
export default IndexPage
