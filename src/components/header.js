import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Container } from "../styles";

const Heading = styled.h2`
  margin-bottom: 0;
`;

const SubHeader = styled.p`
  margin-top: 0;
  opacity: 0.5;
`;

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Container>
      <Heading>{title}</Heading>
      <SubHeader>{description}</SubHeader>
    </Container>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;
