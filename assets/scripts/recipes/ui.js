const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse ', signUpResponse)
  // $('#sign-up-modal').modal('hide')
  // document.getElementById('sign-up-form').reset()
  // document.getElementById('sign-in-form').reset()
  // $('#in-success').modal()
}
const signUpFailure = function (signUpError) {
  console.log('The sign up error is ', signUpError)
}
const signInSuccess = function (response) {
  console.log('response ', response)
  store.user = response.user
}
const signInFailure = function (signInError) {
  console.log('The sign in error is ', signInError)
}
const signOutSuccess = function (response) {
  console.log('Goodbye ', response)
  delete store.user
  console.log('the new store is ', store)
}
const signOutFailure = function (signOutError) {
  console.log('The sign in error is ', signOutError)
}
const passwordPass = function () {
  console.log('password passed')
}
const passwordFail = function () {
  console.log('password failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  passwordPass,
  passwordFail
}
