import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  canvas {
    height: 500px !important;
    width: auto !important;
    @media (max-width: 990px) {
      width: 100% !important;
      height: auto !important;
    }
  }
  h1 {
    margin-bottom: 30px;
  }
`;
