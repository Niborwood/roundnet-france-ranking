import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const muiTheme = createTheme({
  typography: {
    fontFamily: 'Urbanist, sans-serif',
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#315bcd',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
