import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context'
import { UserContextProvider } from './store/user-context'
import store from './redux/configureStore'
import dotenv from 'dotenv'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

dotenv.config()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <FavoritesContextProvider>
      <UserContextProvider>
        <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </UserContextProvider>
    </FavoritesContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorkerRegistration.register();

