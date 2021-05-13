import * as React from "react"
import { Fragment } from 'react'
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import { GlobalStyle } from './styles/GlobalStyles'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />   
    </Fragment>
  )
}



export default Layout
