import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getCart: (token)=>{
    return {
      type: 'GET_CART',
      payload: http(token).get(`http://localhost:8080/cart`)
    }
  },
  postCart: (token, data) => {
    return {
      type: 'POST_CART',
      payload: http(token).post(`http://localhost:8080/cart`, qs.stringify(data))
    }
  }
}