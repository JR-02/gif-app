import styled from 'styled-components';

export const GifContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: fit-content;
  overflow: hidden;
  cursor: pointer;
  background: rgb(65, 65, 65);
  border-radius: 8px;
  position: relative;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  border: 1px solid rgba(255, 255, 255, 0.363); */

  &:hover {
    scale: 1.1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent, #000);
  }
`;

export const GifImage = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

export const GifParagraph = styled.p`
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 32px;
  padding: 0 0.375rem;
  text-transform: capitalize;
  position: absolute;
  bottom: 0;
`;
