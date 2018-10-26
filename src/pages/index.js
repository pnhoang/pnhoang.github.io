import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/header";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir"
        }}
      >
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          const { slug } = edge.node.fields;
          return (
            <div key={slug} style={{ marginBottom: "1rem" }}>
              <Link to={slug}>{frontmatter.title}</Link>
            </div>
          );
        })}

        <div>
          <Link to='/tags'>Browse by Tags</Link>
        </div>
      </div>
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
