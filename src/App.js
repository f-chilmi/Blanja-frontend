import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

// import components
import PrivateRoute from './components/PrivateRoute'

// import pages
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Address from './pages/Address'
import Order from './pages/Order'
import PageProduct from './pages/PageProduct'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} /> } />
            <Route path='/' render={(props) => <Home {...props} /> } exact />
            <Route path='/page-product/:id' render={(props) => <PageProduct {...props} /> } exact />
            <Route path='/profile' render={(props) => <Profile {...props} /> } />
            <Route path='/address' render={(props) => <Address {...props} /> } />
            <Route path='/order' render={(props) => <Order {...props} /> } />
            <Route path='/bag' render={(props) => <Cart {...props} /> } />
            <PrivateRoute path='/'  >
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
