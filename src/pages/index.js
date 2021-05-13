import * as React from "react"
import Hero from "../components/Hero.jsx"
import Layout from "../components/Layout.jsx"
import Seo from "../components/SEO.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Trips from "../components/Trips.jsx"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading='Our Favorite Destinations' />
    <Testimonials />
  </Layout>
)

export default IndexPage
