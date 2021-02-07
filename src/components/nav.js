import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import ContactPreview from "./contactPreview"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
      }
    `}
    render={(data) => (
      <nav>
        <Link to="/">
          <ContactPreview
            picture="https://avatars.githubusercontent.com/u/12994754?s=460&u=3400532c9c0ca38279758c748926a5c5c6279f0d&v=4"
            name={data.strapiGlobal.siteName}
            profession='Software Developer'
          />
        </Link>
      </nav>
    )}
  />
);

export default Nav;