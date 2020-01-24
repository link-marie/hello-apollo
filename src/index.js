import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          "6846dd771f1e3e7389d3f20ec6aabc95867a919e"
        }`
      }
    });
  }
});

const query = gql`
  {
    organization(login: "apollographql") {
      repositories(first: 5) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

client
  .query({
    query
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
// registerServiceWorker();
serviceWorker.register();
