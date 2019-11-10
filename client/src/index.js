import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';

import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <ThemeProvider>
      <AppComponent />
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
