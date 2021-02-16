import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
