import {default as axios} from 'axios'

export default {
  getData: (id)=>({
    type: 'GET_DATA',
    payload: axios.get(`http://localhost:8080/public/items/${id}`)
  })
}