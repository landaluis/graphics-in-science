import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
  font-family:'CaviarDreams';
  src: url('/CaviarDreams.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family:'CaviarDreams_Bold';
  src: url('/CaviarDreams_Bold.ttf') format('truetype');
  font-weight: Bold;
  font-style: normal;
    font-display: swap;
}

@font-face {
  font-family:'Poppins-Regular';
  src: url('/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
    font-display: swap;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }
`;
