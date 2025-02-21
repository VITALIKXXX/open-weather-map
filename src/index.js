import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App/index';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./core/App/store";
import GlobalStyle from './core/App/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/App/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
