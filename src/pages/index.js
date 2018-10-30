import React from "react";
import { graphql, Link } from "gatsby";

import Header from "../components/header";
import { BodyContainer, Container, ContentWrapper } from "../styles";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <BodyContainer>
      <Link to="/about">About</Link>
      <Header />
      <Container>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          const { slug } = edge.node.fields;
          return (
            <ContentWrapper key={slug}>
              <Link to={slug}>{frontmatter.title}</Link>
            </ContentWrapper>
          );
        })}
      </Container>
    </BodyContainer>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }),
    {
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
