import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper, ButtonMenu } from './style';

const Menu = () => (
  <MenuWrapper>
    <Link to="/">
      <LogoImage src={Logo} alt="Danceflix" />
    </Link>

    <ButtonMenu as={Link} to="/cadastro/categoria">
      Novo Vídeo
    </ButtonMenu>
  </MenuWrapper>
);

export default Menu;
