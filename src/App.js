import {useState} from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Register from './pages/Register'


const darkTheme = {
  colors: {
    background: '#2C2C2C',
    infoBackground: 'rgba(140,140,140,1);',
    color: 'rgba(254, 254, 254, 1)',

  }
}


function App() {
  /* const [theme] = useState(localStorage.getItem('theme')); */
  
  return (
    <ThemeProvider theme={darkTheme}>
    <>
      <GlobalStyles />
      <Register />
    </>
    </ThemeProvider>
  );
}

export default App;
