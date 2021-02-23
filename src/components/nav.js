import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import ContactPreview from "./contactPreview"

const Nav = () => {
  const data = useStaticQuery(query);
  return (
    <nav className="container">
      <Link to="/" title="Inicio">
        <ContactPreview
          picture={data.allStrapiUser.edges[0].node.picture.localFile.childImageSharp.fluid}
          name={data.allStrapiUser.edges[0].node.name}
          profession={data.allStrapiUser.edges[0].node.profession}
        />
      </Link>
    </nav>
  );
};

const query = graphql`
  query {
    allStrapiUser {
      edges {
        node {
          name
          profession
          picture {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
}
`;

export default Nav;