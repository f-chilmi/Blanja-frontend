import {default as axios} from 'axios'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  getData: (id)=>({
    type: 'GET_DATA',
    payload: axios.get(`${REACT_APP_BACKEND_URL}/public/items/${id}`)
  }),
  increaseCount: {
    type: 'INCREASE_COUNTER'
  },
  decreaseCount: {
    type: 'DECREASE_COUNTER'
  }
}