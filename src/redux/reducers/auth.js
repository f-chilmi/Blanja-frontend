const initialState = {
  isLogin: false,
  isError: false,
  errorMsg: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_USER': {
      const { email, password } = action.payload
      if(email==='admin@mail.com' && password==='2222'){
        return{
          isLogin: true,
          isError: false,
          errorMsg: 'Login successfully'
        }
      } else {
        return{
          isLogin: false,
          isError: true,
          errorMsg: 'Wrong email or password'
        }
      }
    }
    default: {
      return state
    }
  }
}