import {default as axios} from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: http().post('http://localhost:8080/auth/login',qs.stringify(data))
    // payload: axios.post('http://localhost:8080/auth/login', data)
  })
}