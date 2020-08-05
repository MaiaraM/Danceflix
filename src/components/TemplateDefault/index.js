import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.div`
  background: var(--grayDark);
  color: var(--white);
  flex: 1;
`;

const TemplateDefault = ({ children }) => (
  <>
    <Menu />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

export default TemplateDefault;
