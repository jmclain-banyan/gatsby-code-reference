import * as React from "react"
import Hero from "../components/Hero.jsx"
import Layout from "../components/Layout.jsx"
import Seo from "../components/SEO.jsx"
import Stats from "../components/Stats.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Trips from "../components/Trips.jsx"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading='Our Favorite Destinations' />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
