import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import pages
import Login from './pages/Login'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} /> } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
