const initialState = {
  data: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: ''
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'GET_ADDRESS_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.data
      }
    }
    case 'ADD_ADDRESS_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'ADD_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'ADD_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true
        // data: action.payload.data.data
      }
    }
    default : {
      return state
    }
  }
}