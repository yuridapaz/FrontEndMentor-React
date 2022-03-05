import { createGlobalStyle } from 'styled-components';
import bgDesktop from '../images/pattern-background-desktop.svg';
import bgMobile from '../images/pattern-background-mobile.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 375px) {
  body {
    background-image: url(${bgMobile});
  background-repeat: no-repeat;
  }
}
`;
