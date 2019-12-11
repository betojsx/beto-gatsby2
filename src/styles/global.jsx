import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    padding: 0;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #fff;
  }
  img {
    display: block;
  	width: 100%;
    height: auto;
    margin: 0;
  }

  .gatsby-highlight {
    margin-left: -20px;
    margin-right: -20px;
    padding: 20px;
    width: calc(100% + 40px);
    background: #1e1f21;
  }

  
  pre::-webkit-scrollbar-track {
      background: #c5c8c6;
      border-radius: 10px;
      cursor: pointer;
  }
  
  pre::-webkit-scrollbar-thumb {
      background: #1d1f21;
      border-radius: 10px;
      box-shadow: inset 0 0 2px 1px rgba(110, 7, 183, 0.7); 
      cursor: pointer;
  }

  @media (max-width: 768px) {
    .gatsby-highlight{
      padding: 4px;
      margin: 0 auto;
      width: 100%;
    }
    pre::-webkit-scrollbar-thumb {
      background: #1d1f21;
      border-radius: 10px;
      box-shadow: inset 0 0 2px 1px rgba(110, 7, 183, 0.7); 
      cursor: pointer;
      height: 8px;
    }
  }
  /* body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  } */
`;
export default GlobalStyles;
