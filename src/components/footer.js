import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Platzi from "../assets/images/blog_Platzi.png"
import Twitter from "../assets/images/blog_Twitter.png"
import Github from "../assets/images/blog_Github.png"
import BuyCoffe from "../assets/images/blog_Buy_Coffee.png"

const Footer = ({ text, backgroundColor, color }) => {
  const data = useStaticQuery(query);
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>{`Joel Morales @naojamg | Todos los derechos reservados © ${year}.`}</p>
      <div className="socialContainer">
        <Link to={data.allStrapiUser.edges[0].node.platzi} target="_blank" title="Platzi" rel="noopener">
          <img className="socialLink" src={Platzi} alt="Platzi" title="Platzi" />
        </Link>
        <Link to={data.allStrapiUser.edges[0].node.twitter} target="_blank" title="Twitter" rel="noopener">
          <img className="socialLink" src={Twitter} alt="Twitter" title="Twitter" />
        </Link>
        <Link to={data.allStrapiUser.edges[0].node.github} target="_blank" title="Github" rel="noopener">
          <img className="socialLink" src={Github} alt="Github" title="Github" />
        </Link>
        <Link to={data.allStrapiUser.edges[0].node.buyCoffe} target="_blank" title="Buy me a Coffe" rel="noopener">
          <img className="socialLink" src={BuyCoffe} alt="Buy me a Coffe" title="Buy me a Coffe" />
        </Link>
      </div>
    </footer>
  );
};

const query = graphql`
  query {
    allStrapiUser {
      edges {
        node {
          name
          profession
          platzi
          twitter
          github
          buyCoffe
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

export default Footer;