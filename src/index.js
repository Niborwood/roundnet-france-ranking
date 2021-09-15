import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';

import './index.scss';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const muiTheme = createTheme(
  {
    typography: {
      fontFamily: 'Urbanist, sans-serif',
    },
    palette: {
      type: 'dark',
      primary: {
        light: '#778edc',
        main: '#315bcd',
        dark: '#1e48b6',
        analogous: '#31a9cd',
      },
      secondary: {
        light: '#fb5d89',
        main: '#f50057',
        dark: '#cf0051',
      },
    },
  },
  frFR,
);

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
