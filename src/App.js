import React, { useState, useEffect } from 'react';
import './app.scss';
import { Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/Product/Product'
import NoMatch from './pages/NoMatch'
import { FetchProduct } from './api/index'


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

      <Switch>
        <Route path="/" exact><Main products={products} /></Route>
        <Route path="/:id" exact render={(props) => <Product products={products} />}></Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
