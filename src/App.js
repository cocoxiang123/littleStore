import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/:id" exact component={Product}></Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
