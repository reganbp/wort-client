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
const createRecipeSuccess = function (response) {
  console.log('you created a recipe, the respose is ', response)
  console.log('the store is ', store)
}
const createRecipeFailure = function (response) {
  console.log('failure, response is ', response)
}
const getRecipesSuccess = function (response) {
  console.log('The response is ', response)
}
const getRecipesFailure = function (getRecipesError) {
  console.log('The get error is ', getRecipesError)
}
const getRecipeSuccess = function (response) {
  console.log('The response is ', response)
}
const getRecipeFailure = function (getRecipeError) {
  console.log('The get error is ', getRecipeError)
}
const updateRecipeSuccess = function (response) {
  console.log('The response is ', response)
}
const updateRecipeFailure = function (response) {
  console.log('The get error is ', response)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  passwordPass,
  passwordFail,
  createRecipeSuccess,
  createRecipeFailure,
  getRecipesSuccess,
  getRecipesFailure,
  getRecipeSuccess,
  getRecipeFailure,
  updateRecipeSuccess,
  updateRecipeFailure
}
