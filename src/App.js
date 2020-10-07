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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} /> } />
            <Route path='/' render={(props) => <Home {...props} /> } exact />
            <Route path='/profile' render={(props) => <Profile {...props} /> } />
            <PrivateRoute path='/'  >
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
