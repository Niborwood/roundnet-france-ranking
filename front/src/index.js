import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import { BrowserRouter as Router } from 'react-router-dom';

// MUI IMPORTS
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';
import CssBaseline from '@mui/material/CssBaseline';

// APP IMPORT
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// MUI THEME
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

// GRAPHQL APOLLO CONFIG
const httpLink = createHttpLink({
  uri: 'https://roundnet-france-ranking.herokuapp.com/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={muiTheme}>
        <Router>
          <CssBaseline>
            <App />
          </CssBaseline>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
