import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"
import Header from "./Header"
import Neck from "./Neck"
import { Search } from "./Search"

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Neck siteTitle={data.site.siteMetadata.title} />
        <Header />
        <Search />

        <div
          style={{
            margin: "0 auto",
            maxWidth: "55rem",
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          <h2>
            <Link to="/categories">categories page! </Link>
            <br />
            <Link to="/archives">archives page!</Link>
          </h2>
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
