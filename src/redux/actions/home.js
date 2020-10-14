import {default as axios} from 'axios'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  getData: ()=>({
    type: 'GET_DATA',
    payload: axios.get(`${REACT_APP_BACKEND_URL}/public?limit=12&sort[updated_at]=desc`)
  }),
  getPopular: () => {
    return {
      type: 'POPULAR',
      payload: axios.get(`${REACT_APP_BACKEND_URL}/public?limit=12&sort[rating]=desc`)
    }
  },
  getCategory: () => {
    return {
      type: 'CATEGORY_LIST',
      payload: axios.get(`${REACT_APP_BACKEND_URL}/public/subcategory`)
    }
  }
}