import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router } from 'react-router-dom';

// MUI IMPORTS
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';
import CssBaseline from '@mui/material/CssBaseline';

// APP IMPORT
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import AUTH_TOKEN from './constants';

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
      white: '#ffffff',
    },
  },
  frFR,
);

// GRAPHQL APOLLO CONFIG
const httpLink = createHttpLink({
  uri: 'https://roundnet-france-ranking.herokuapp.com/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
