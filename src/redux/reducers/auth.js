const initialState = {
  isLogin: false,
  isError: false,
  errorMsg: '',
  token: '',
  successLogin: false,
  successLogout: false,
  alertMsg: ''
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
        token: action.payload.data.token
        // data: action.payload.data
      }
    }
    case 'SIGNUP_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'SIGNUP_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Wrong email or password'
      }
    }
    case 'SIGNUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        successLogin: action.payload.data.success
        // data: action.payload.data
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLogin: false,
        successLogin: false,
        token: '',
        alertMsg: 'Logout successfully',
        successLogout: true
      }
    }
    default : {
      return state
    }
  }
}