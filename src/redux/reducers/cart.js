const initialState = {
  data: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  successAdd: false
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'GET_CART_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data
      }
    }
    case 'POST_CART_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'POST_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'POST_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data,
        successAdd: true
      }
    }
    default : {
      return state
    }
  }
}