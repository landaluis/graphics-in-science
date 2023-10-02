import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
  --background-white: #efeeec;
  --grey01: #687277;
  --grey02: #3C4A51;
  --grey03: #C2C5C5;
  --black01: #10212A;
  --blueContact-us: #25363d;
  --separation-line: #959c9e;
  --yellow01: #fc0;

  }
  body {
 margin: 0;
    font-family: system-ui;
    background-color: var(--background-white);
   
   

  }
`;
