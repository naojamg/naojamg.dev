import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import ContactPreview from "./contactPreview"

const Nav = () => {
  const data = useStaticQuery(query);
  return (
    <nav>
      <Link to="/" title="Inicio" title="Inicio">
        <ContactPreview
          picture={data.allStrapiUser.edges[0].node.picture.localFile.publicURL}
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
              publicURL
            }
          }
        }
      }
    }
}
`;

export default Nav;