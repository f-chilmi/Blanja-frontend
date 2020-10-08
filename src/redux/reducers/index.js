import {combineReducers} from 'redux'

import auth from './auth'
import home from './home'
import profile from './profile'

export default combineReducers({
  auth,
  home,
  profile
})