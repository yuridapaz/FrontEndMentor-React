import GlobalStyles from './components/globalStyles';
import { theme } from './components/theme';
import { ThemeProvider } from 'styled-components';
import * as C from './App.styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className="App">Hello App styled components</div>
        <C.Card />
      </ThemeProvider>
    </>
  );
}

export default App;
