import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  padding: 50px;
  color: #fff;

  @media only screen and (max-width: 1920px) {
    grid-template-columns: repeat(4, auto);
  }

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 590px) {
    padding: 0;
  }
`;
