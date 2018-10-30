import React from "react";
import { graphql, Link } from "gatsby";
import { BodyContainer, ContentWrapper } from "../styles";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  return (
    <BodyContainer>
      <Link to="/">Home</Link>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <ContentWrapper>
        {next && <Link to={next.fields.slug}>Next</Link>}
      </ContentWrapper>

      <div>
        {prev && <Link to={prev.fields.slug}>Prev</Link>}
      </div>
    </BodyContainer>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(fields: { slug: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
