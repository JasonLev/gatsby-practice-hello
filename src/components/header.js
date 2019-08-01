import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from "gatsby"

import headerStyles from './header.module.css'

export default function Header(){
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
        <nav className={headerStyles.navBar}>
            <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>   
            <ul className={headerStyles.navList}>
                <li>
                    <Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/">Home</Link>
                </li>
                <li>
                    <Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}