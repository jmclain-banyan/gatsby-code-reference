import * as React from "react"
import Hero from "../components/Hero.jsx"
import Layout from "../components/Layout.jsx"
import Seo from "../components/SEO.jsx"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
      
  </Layout>
)

export default IndexPage
