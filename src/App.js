import React, { useState, useEffect } from 'react';
import './app.scss';
import { Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Cart from './pages/Cart'
import Nav from './component/Nav'
import Product from './pages/Product/Product'
import NoMatch from './pages/NoMatch'
import { FetchProduct } from './api/index'
import Checkout from './pages/Checkout';


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      setProducts(await FetchProduct())
    }
    getData();
  }, [])


  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact><Main /></Route>
        <Route path="/product/:id" exact render={(props) => <Product products={products} />}></Route>
        <Route path="/cart" exact ><Cart /></Route>
        <Route path="/checkout" exact ><Checkout /></Route>
        <Route path="*">

          <NoMatch />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
