import {default as axios} from 'axios'

export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: axios.post('http://localhost:8080/auth/login', data)
  })
}