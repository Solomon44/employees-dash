import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import Header from '../components/Header';
import Employees from '../pages/Employees/Employees';
import GetUsers from '../graphql/Queries';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333396',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    // paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:8000/graphql',
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className={classes.appMain}>
          <Header />
          <Employees />

          <GetUsers />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
