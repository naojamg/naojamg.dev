import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          strapiId
          name
          description
        }
      }
    }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiRestaurant.edges.map(restaurant => (
          <li key={restaurant.node.strapiId}>{restaurant.node.name}</li>
        ))}
      </ul>
    )}
  />
);

export default IndexPage;