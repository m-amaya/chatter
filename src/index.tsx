import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app/App';
import { Store, StoreCtx } from 'store';

/**
 * Setup
 */
const store = new Store();

/**
 * Context Providers
 */
const Providers: React.FC = ({ children }) => (
  <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>
);
/**
 * Bootstrap
 */
ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('chatter-app'),
);
