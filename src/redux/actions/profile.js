import {default as axios} from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  getProfile: (token)=>{
    return {
      type: 'GET_PROFILE',
      payload: http(token).get(`${REACT_APP_BACKEND_URL}/users`)
    }
  },
  updateProfile: (token, data) => {
    return {
      type: 'UPDATE_PROFILE',
      payload: http(token).patch(`${REACT_APP_BACKEND_URL}/users`, qs.stringify(data))
    }
  }
}