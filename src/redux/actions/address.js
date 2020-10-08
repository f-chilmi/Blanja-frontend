import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getAddress: (token)=>{
    return {
      type: 'GET_ADDRESS',
      payload: http(token).get(`http://localhost:8080/users/address`)
    }
  }
}