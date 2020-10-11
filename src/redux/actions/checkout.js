import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getCheckout: (token)=>{
    return {
      type: 'CHECKOUT',
      payload: http(token).get('http://localhost:8080/checkout')
    }
  },
  payment: (token) => {
    return {
      type: 'PAYMENT',
      payload: http(token).get('http://localhost:8080/checkout/payments')
    }
  }
}