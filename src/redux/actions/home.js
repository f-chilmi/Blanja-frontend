import {default as axios} from 'axios'

export default {
  getData: ()=>({
    type: 'GET_DATA',
    payload: axios.get('http://localhost:8080/public?limit=12&sort[updated_at]=desc')
  }),
  getPopular: () => {
    return {
      type: 'POPULAR',
      payload: axios.get('http://localhost:8080/public?limit=12&sort[rating]=desc')
    }
  }
}