import './App.css';
import HeaderComponent from './components/organism/Header';
import { ThemeProvider } from '@emotion/react';
import theme from './themes';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
      <HeaderComponent/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
