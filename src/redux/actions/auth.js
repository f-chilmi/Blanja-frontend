export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: data
  })
}