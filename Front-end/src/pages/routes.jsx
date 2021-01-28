import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import PagesSearchHeroes from './SearchHeroes/SearchHeroes'

import PagesRegister from './Register/Register'
const Routes = () => (
  <Router>
    <StoreProvider>
      <Switch>

        <Route path="/login" component={Login} />

        <Route path="/register" component={PagesRegister} />

        <RoutesPrivate exact path="/" component={Home} />
        
        <RoutesPrivate path="/searchHeroes" component={PagesSearchHeroes} />


      </Switch>
    </StoreProvider>
  </Router>
)


export default Routes;
