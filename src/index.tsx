import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sagaMiddleware, store } from './store';
import { rootSaga } from './modules';

const httpLink = createHttpLink({
  uri: ''
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
      headers: {
          ...headers,
          authorization: Boolean(token) ? `JWT ${token}` : '',
      },
  };
});

const httpAuthLink = authLink.concat(httpLink);

export const client = new ApolloClient({
  link: from([httpAuthLink]),
  cache: new InMemoryCache(),
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
