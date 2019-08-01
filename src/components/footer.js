import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.css'

export default function Footer() {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        This project was built by {data.site.siteMetadata.author} in &copy;
        2019.
      </p>
      <p>
        Use the <a href="https://www.gatsbyjs.org/">Gatsby Docs</a> for
        information about Gatsby.
      </p>
    </footer>
  )
}
