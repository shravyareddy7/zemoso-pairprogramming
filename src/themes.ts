import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(11, 109, 98, 1)', 
    },
    
  },
  typography: {
    fontFamily: 'Roboto', 
    fontWeightRegular: 400, 
    fontSize: 16, 
    h1: {
      fontFamily: 'Neucha',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '32px',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '22px',
    },
  },
});

export default theme;
