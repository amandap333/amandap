import React from "react"
import Header from "../components/header"
import styles from "./about-css-modules.module.css"


export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)