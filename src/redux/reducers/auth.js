const initialState = {
  isLogin: false,
  isError: false,
  errorMsg: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'AUTH_USER_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'AUTH_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Wrong email or password'
      }
    }
    case 'AUTH_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.token
      }
    }
    default : {
      return state
    }
  }
}