const initialState = {
  data: [],
  dataPopular: [],
  categoryList: [],
  successGetCategory: false,
  isLoading: false,
  isError: false,
  alertMsg: ''
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'GET_DATA_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_DATA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'GET_DATA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.info
      }
    }
    case 'POPULAR_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'POPULAR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'POPULAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        dataPopular: action.payload.data.info
      }
    }
    case 'CATEGORY_LIST_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'CATEGORY_LIST_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'CATEGORY_LIST_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        categoryList: action.payload.data.data,
        successGetCategory: true
      }
    }
    default : {
      return state
    }
  }
}