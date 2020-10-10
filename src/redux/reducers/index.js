import {combineReducers} from 'redux'

import auth from './auth'
import home from './home'
import product from './page-product'
import profile from './profile'
import address from './address'
import cart from './cart'

export default combineReducers({
  auth,
  home,
  product,
  profile,
  address,
  cart
})