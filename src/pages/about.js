import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import { BodyContainer } from "../styles";

const ContentBody = styled.div`
    margin-top: 48px;
`;

export default () => (<BodyContainer>
    <Link to="/">Home</Link>

    <ContentBody>
        <p>Hi, I am Hoang Pham, currently a Frontend Developer at HelloFresh. </p>
        <p>Besides work, I do martial art, I train a group of adults and children Vietnamese martial art called Vovinam. You're welcome to join us. Check out: <a href="http://vovinamberlin.eu">Vovinam Berlin</a></p>
        <p>This website is built with Gatsby, Markdown, source code is on <a href="https://github.com/pnhoang/pnhoang.github.io" alt="github">Github</a>. Check out develop branch.</p>
    </ContentBody>
    </BodyContainer>)
