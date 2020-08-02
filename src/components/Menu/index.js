import React from 'react';

import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper, ButtonMenu} from './style.js';

const Menu = () => {
    return <MenuWrapper>
        <a href='/'>
            <LogoImage src={Logo} alt="Danceflix" />
        </a>

        <ButtonMenu href='/'>
            Novo Vídeo
        </ButtonMenu>
    </MenuWrapper>
}

export default Menu;