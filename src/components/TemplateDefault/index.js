import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.div`
  background: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0 5%;

  ${({ paddingAll }) => css`
      padding: ${paddingAll}
  `}
`;

const TemplateDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

export default TemplateDefault;
