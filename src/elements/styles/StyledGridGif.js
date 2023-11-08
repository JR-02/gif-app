import styled from 'styled-components';

export const GridGifContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 25px;
`;

export const GridGifH2 = styled.h2`
  text-transform: capitalize;
  margin-bottom: 20px;
`;

export const GridGif = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  margin-top: 0;
  min-height: 500px;
  grid-auto-rows: 1fr;
`;
