import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBody = styled.header`
  display: grid;
  padding: 10px 0px;
  font-size: small;
  font-weight: 700;
  justify-content: space-between;
  grid-template-areas: 'Navbar Buscador';

  @media (max-width: 720px) {
    grid-template-areas: 'Navbar' 'Buscador';
    justify-content: center;
    justify-items: center;
    gap: 10px;
  }
`;

export const HeaderNav = styled.nav`
  grid-area: Navbar;
`;

export const ListNavbar = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListNavbarItem = styled.li`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
`;

export const NavbarLink = styled(Link)`
  display: block;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;
