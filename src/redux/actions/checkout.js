import http from '../../helpers/http'
import qs from 'querystring'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  getCheckout: (token)=>{
    return {
      type: 'CHECKOUT',
      payload: http(token).get(`${REACT_APP_BACKEND_URL}/checkout`)
    }
  },
  payment: (token) => {
    return {
      type: 'PAYMENT',
      payload: http(token).get(`${REACT_APP_BACKEND_URL}/checkout/payments`)
    }
  }
}