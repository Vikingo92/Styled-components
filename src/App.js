import GlobalStyles from './components/Global';
import { Container } from './components/Container';
import Header from './components/Header'
import Card from './components/Card'

const theme = {
  mobile: '375px',

}

function App() {
  return (
    <>
      <GlobalStyles />
        <Header>
        </Header>
        <Container>
          <Card />
        </Container>
    </>
  );
}

export default App;

