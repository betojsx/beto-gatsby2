import React from 'react';
// import { Link } from 'gatsby';
import StyledHeader, { Symbol, TitleLink } from './styles';
import symbol from '../../../static/logos/beto-logo-simbolo.png';

const Header = () => {
  return (
    <StyledHeader>
      <TitleLink to={`/`}>
        <Symbol src={symbol} alt="Beto" width="54" height="54" />
        <h1>Beto da Silva</h1>
        <h1>Front End Developer</h1>
      </TitleLink>
    </StyledHeader>
  );
};

export default Header;
