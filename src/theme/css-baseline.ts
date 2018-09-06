import { css, injectGlobal } from 'emotion';

import 'typeface-montserrat';

const fontStyles = css`
  font-family: 'Montserrat', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

// tslint:disable-next-line:no-unused-expression
(() => injectGlobal`  
  html {
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    ${fontStyles}
    margin: 0;
    background-color: white;
  }
  input, textarea, select, button {
    ${fontStyles}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote,h1,h2,h3,h4,h5,p, span {
    ${fontStyles}
    margin: 0;
  }
  input, textarea, select {
  font-size: 14px;
  }
`)();
