import React from "react"

import Layout from "../components/layout"

import { graphql, useStaticQuery } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
        <Layout >
            <h1>Welcome to the {data.site.siteMetadata.title}</h1>
        </Layout>
    )
}
