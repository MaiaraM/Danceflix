import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.div`
  padding: 50px 5% 0 5%;
  background: var(--grayDark);
  color: var(--white);
  flex: 1;
`;

const TemplateDefault = ({ children }) => {
    return <>
        <Menu />
        <Main>
            {children}
        </Main>
        <Footer />
    </>

}

export default TemplateDefault;