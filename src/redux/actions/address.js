import http from '../../helpers/http'
import qs from 'querystring'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  getAddress: (token)=>{
    return {
      type: 'GET_ADDRESS',
      payload: http(token).get(`${REACT_APP_BACKEND_URL}/users/address`)
    }
  },
  addAddress: (token, data) => {
    return {
      type: 'ADD_ADDRESS',
      payload: http(token).post(`${REACT_APP_BACKEND_URL}/users/address`, qs.stringify(data))
    }
  }
}