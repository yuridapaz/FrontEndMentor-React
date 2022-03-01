import * as C from './App.styles';
import { theme } from './components/theme';
import { ThemeProvider } from 'styled-components';

const descricao = {
  para: 'Hello',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <C.Card>
          <C.Img></C.Img>
          <C.Description></C.Description>
          <C.EthValue></C.EthValue>
          <C.UserDescription></C.UserDescription>
        </C.Card>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
