import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductProvider from './context'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './redux/reducer'

const init = {
  cartItem: [],
  amount: 0,
  total: 0,
  address: {}
}

const store = createStore(reducer, init)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ProductProvider >
        <App />
      </ProductProvider>
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
