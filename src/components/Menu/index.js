import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper, ButtonMenu} from './style.js';

const Menu = () => {
    return <MenuWrapper>
        <Link to='/'>
            <LogoImage src={Logo} alt="Danceflix" />
        </Link>

        <ButtonMenu as={Link} to='/cadastro/video'>
            Novo Vídeo
        </ButtonMenu>
    </MenuWrapper>
}

export default Menu;