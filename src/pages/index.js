import React from "react";
import { graphql, Link } from "gatsby";

import Header from "../components/header";
import { Container, SpaceBottomContainer } from "../styles";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <Header />
      <Container>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          const { slug } = edge.node.fields;
          return (
            <SpaceBottomContainer key={slug}>
              <Link to={slug}>{frontmatter.title}</Link>
            </SpaceBottomContainer>
          );
        })}
      </Container>
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Layout;
