import React from "react"

import Header from "./header"
import Footer from "./footer"

import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
