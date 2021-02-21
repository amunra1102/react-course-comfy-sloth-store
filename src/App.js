import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  Cart,
  About,
  Error,
  Products,
  Checkout,
  AuthWrapper,
  PrivateRoute,
  SingleProduct,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/about' component={About}/>
          <PrivateRoute exact path='/checkout'>
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute exact path='/products' component={Products}/>
          <Route exact path='/products/:id' children={<SingleProduct />}/>
          <Route exact path='*' component={Error}/>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
