import React from 'react';

import { getLocale } from '~/locale';

import { Container, AboutContainer, Message, API, SourceCode } from './styles';

const About = () => {
  const {
    Pages: {
      About: { title, githubRepo, apiSource },
    },
  } = getLocale();

  return (
    <Container>
      <AboutContainer>
        <Message>{title}</Message>

        <SourceCode>
          <a href="https://github.com/pedropjr/covid19-tracker">{githubRepo}</a>
        </SourceCode>

        <API>
          <a href="https://github.com/devarthurribeiro/covid19-brazil-api">
            {apiSource}
          </a>
        </API>
      </AboutContainer>
    </Container>
  );
};

export default About;
