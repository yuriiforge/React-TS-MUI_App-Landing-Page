import { Box } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box>
      <Header />
      <section>
        <Content />
      </section>
      <Footer />
    </Box>
  );
};

export default App;
