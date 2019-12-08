import styled from 'styled-components';
import media from 'styled-media-query';

import { rhythm } from '../../utils/typography';
const Article = styled.article`
  /* margin-bottom: ${rhythm(1)};
  header {
    margin-bottom: ${rhythm(1)};
  } */

  h2 {
	color: '#2c2541';
	margin-bottom: 0;
    a {
      text-decoration: none;
      color: inherit;
      background: none;
    }
  }

  time {
    font-size: ${rhythm(1 / 2)};
  }

  p {
    color: '#444444';
    margin: 0;
  }
`;

export default Article;
