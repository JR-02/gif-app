import styled from 'styled-components';

export const MenuBackdrop = styled.div`
  position: absolute;
  background: rgb(0, 153, 255);
  backdrop-filter: blur(7px);
  top: var(--top);
  left: var(--left);
  width: var(--width);
  height: var(--height);
  transition: all 400ms ease-in-out;
  opacity: 0;
  visibility: none;
  z-index: -10;
  border-radius: 4px;
`;
