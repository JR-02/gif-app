import { useState } from 'react';
import {
  HeaderBody,
  ListNavbar,
  ListNavbarItem,
  NavbarLink,
} from '../elements/layout/StyledHeader';
import PropTypes from 'prop-types';
import useBackdropMenu from '../hooks/useBackdropMenu';
import { MenuBackdrop } from '../elements/MenuBackdrop';

const Header = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const { handleMouseEnter, handleMouseLeave, backdropRef } = useBackdropMenu();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <HeaderBody>
      <nav>
        <ListNavbar>
          <ListNavbarItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavbarLink to='/'>Home</NavbarLink>
          </ListNavbarItem>

          <ListNavbarItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavbarLink to='/Favorite'>Favorites</NavbarLink>
          </ListNavbarItem>
        </ListNavbar>
      </nav>

      <MenuBackdrop ref={backdropRef} />

      <form action='' className='formulario-buscar' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-buscar'
          placeholder='Busca un gif cool...'
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button className='btn-buscar'>Buscar</button>
      </form>
    </HeaderBody>
  );
};

Header.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default Header;
