import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { SpaceBottomContainer } from "../styles";

const Wrapper = styled.div`
  margin: auto;
  width: 50%;
`

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  return (
    <Wrapper>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <SpaceBottomContainer>
        {next && <Link to={next.fields.slug}>Next</Link>}
      </SpaceBottomContainer>

      <div>
        {prev && <Link to={prev.fields.slug}>Prev</Link>}
      </div>
    </Wrapper>
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
