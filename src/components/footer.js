import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Platzi from "../assets/images/blog_svg_platzi.svg"
import Twitter from "../assets/images/blog_svg_twitter.svg"
import Github from "../assets/images/blog_svg_github.svg"
import BuyCoffe from "../assets/images/blog_svg_buycoffee.svg"

const Footer = ({ text, backgroundColor, color }) => {
  const data = useStaticQuery(query);
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>{`Joel Morales @naojamg | Todos los derechos reservados © ${year}.`}</p>
      <div className="socialContainer">
        <a href={data.allStrapiUser.edges[0].node.platzi} target="_blank" title="Platzi" rel="noopener noreferrer">
          <img className="socialLink" width="50" height="50" src={Platzi} alt="Platzi" title="Platzi" />
        </a>
        <a href={data.allStrapiUser.edges[0].node.twitter} target="_blank" title="Twitter" rel="noopener noreferrer">
          <img className="socialLink" width="50" height="50" src={Twitter} alt="Twitter" title="Twitter" />
        </a>
        <a href={data.allStrapiUser.edges[0].node.github} target="_blank" title="Github" rel="noopener noreferrer">
          <img className="socialLink" width="50" height="50" src={Github} alt="Github" title="Github" />
        </a>
        <a href={data.allStrapiUser.edges[0].node.buyCoffe} target="_blank" title="Buy me a Coffe" rel="noopener noreferrer">
          <img className="socialLink" width="50" height="50" src={BuyCoffe} alt="Buy me a Coffe" title="Buy me a Coffe" />
        </a>
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
        }
      }
    }
}
`;

export default Footer;