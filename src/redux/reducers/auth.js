const initialState = {
  isLogin: true,
  isError: false,
  errorMsg: '',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTYwMjY0OTUzNCwiZXhwIjoxNjAyNzM1OTM0fQ.tf8YCrBbato04vhxNpIgaYZBD2IUF_p-kokRXnMW6Ww',
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