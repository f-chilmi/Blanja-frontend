import http from '../../helpers/http'
import qs from 'querystring'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  getCart: (token)=>{
    return {
      type: 'GET_CART',
      payload: http(token).get(`${REACT_APP_BACKEND_URL}/cart`)
    }
  },
  postCart: (token, data) => {
    return {
      type: 'POST_CART',
      payload: http(token).post(`${REACT_APP_BACKEND_URL}/cart`, qs.stringify(data))
    }
  },
  updateCart: (token, qty) => {
    return {
      type: 'UPDATE_CART',
      payload: http(token).patch(`${REACT_APP_BACKEND_URL}/cart`, qs.stringify(qty))}
  }
}