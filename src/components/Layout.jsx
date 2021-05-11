import * as React from "react"
import { Fragment } from 'react'

import Header from "./header"


const Layout = ({ children }) => {
 

  return (
    <Fragment>
      <Header />
      <main>{children}</main>      
    </Fragment>
  )
}



export default Layout
