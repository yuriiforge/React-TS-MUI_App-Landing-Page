import { Box } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <Box>
      <Header />
      <section>
        <Content />
      </section>
    </Box>
  );
};

export default App;
