import React from "react"

import Layout from "../components/layout"

import { graphql, useStaticQuery } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
            title
          }
        }
      }
    `)
    return (
        <Layout >
            <h1>This project is {data.site.siteMetadata.title}</h1>
            <h3>This was built by {data.site.siteMetadata.author}</h3>
        </Layout>
    )
}
