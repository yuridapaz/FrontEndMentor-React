import { createGlobalStyle } from 'styled-components';
import bgDesktop from '../images/pattern-background-desktop.svg';
import bgMobile from '../images/pattern-background-mobile.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body {
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;500;600;700;800;900&display=swap');
  font-family: 'Red Hat Display', sans-serif;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  background-image: url(${bgDesktop});
  background-repeat: repeat-x;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(225, 100%, 94%);
}

@media only screen and (max-width: 375px) {
  body {
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  }
}
`;
