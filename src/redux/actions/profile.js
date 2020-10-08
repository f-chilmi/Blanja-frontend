import {default as axios} from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

export default {
  // getData: ()=>({
  //   type: 'GET_DATA',
  //   payload: http().get('/users')
  //   // payload: axios.get('http://localhost:8080/users')
  // }),
  getProfile: (token)=>{
    return {
      type: 'GET_PROFILE',
      payload: http(token).get(`http://localhost:8080/users`)
    }
  },
  updateProfile: (token, data) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).patch('http://localhost:8080/users', qs.stringify(data))
    }
  }
}