import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/Product'
import { FetchProduct } from './api/index'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      setProducts(await FetchProduct())
    }
    getData();
  }, [])

  console.log(products)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Main products={products} /></Route>
          <Route path="/:id" exact ><Product products={products} /></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
