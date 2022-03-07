import GlobalStyles from './components/globalStyles';
import { theme } from './components/theme';
import { ThemeProvider } from 'styled-components';
import * as C from './App.styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <C.Card>
          <C.TopImage />
          <C.BottomContainer>
            <C.Description />
            <C.PlansDiv />
            <C.Button primary>Proceed to Payment</C.Button>
            <C.Button>Cancel Order</C.Button>
          </C.BottomContainer>
        </C.Card>
      </ThemeProvider>
    </>
  );
}

export default App;
