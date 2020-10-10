import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getAddress: (token)=>{
    return {
      type: 'GET_ADDRESS',
      payload: http(token).get(`http://localhost:8080/users/address`)
    }
  },
  addAddress: (token, data) => {
    return {
      type: 'ADD_ADDRESS',
      payload: http(token).post(`http://localhost:8080/users/address`, qs.stringify(data))
    }
  }
}