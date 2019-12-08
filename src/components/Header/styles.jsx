import styled from 'styled-components';
import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';

const StyledHeader = styled.header`
  height: 70px;
`;

const Symbol = styled.img`
  width: 54px;
  height: 54px;
  flex: 0 0 54px;
`;

const TitleLink = styled(Link)`
  color: #000;
  font-size: ${rhythm(1 / 1.5)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  h1 {
    font-size: inherit;
    color: inherit;

    &:first-of-type {
      margin-right: auto;
    }
  }
`;

export default StyledHeader;
export { Symbol, TitleLink };
