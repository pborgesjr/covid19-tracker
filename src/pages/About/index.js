/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { Container, AboutContainer, Message, API, SourceCode } from './styles';

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <Message>Aplicação desenvolvida por Pedro Borges Jr.</Message>

        <SourceCode>
          <a href="https://github.com/pedropjr/covid19-tracker">
            ⚛️ Repositório Github
          </a>
        </SourceCode>

        <API>
          <a href="https://github.com/devarthurribeiro/covid19-brazil-api">
            🚀 Fonte de dados Brasil e Mundo.
          </a>
        </API>

        <API>
          <a href="https://brasil.io/dataset/covid19/">
            🚀 Secretarias de Saúde das Unidades Federativas, dados tratados por
            Álvaro Justen e equipe de voluntários Brasil.IO
          </a>
        </API>
      </AboutContainer>
    </Container>
  );
};

export default About;
