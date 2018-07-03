'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')

const dataCheck = function (data) {
  for (const key in data) {
    if (data[key] === '') {
      delete data[key]
    }
  }
  // console.log('dataCheck gives data as ', data)
  return data
}
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}
const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePw(data)
    .then(authUi.passwordPass)
    .catch(authUi.passwordFail)
}
const onSignOut = function (event) {
  event.preventDefault()

  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}
const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.createRecipe(data)
    .then(authUi.createRecipeSuccess)
    .catch(authUi.createRecipeFailure)
}
const onGetRecipes = function (event) {
  event.preventDefault()

  authApi.getRecipes()
    .then(authUi.getRecipesSuccess)
    .catch(authUi.getRecipesFailure)
}
const onGetRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.getRecipe(data)
    .then(authUi.getRecipeSuccess)
    .catch(authUi.getRecipeFailure)
}
const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  dataCheck(data)
  // console.log('dataCheck gives itselfs as ', dataCheck(data))
  authApi.updateRecipe(data)
    .then(authUi.updateRecipeSuccess)
    .catch(authUi.updateRecipeFailure)
}
const onDestroyRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.destroyRecipe(data)
    .then(authUi.destroyRecipeSuccess)
    .catch(authUi.destroyRecipeFailure)
}
const onCreateClick = function (event) {
  $('#create').show()
  $('.new-recipe').hide()
  $('#get').hide()
  $('#update').hide()
  $('#destroy').hide()
  $('#get-recipe').hide()
}
const onUpdateCLick = function (event) {
  $('#update').show()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').hide()
  $('#destroy').hide()
  $('#get-recipe').hide()
}
const onDestroyClick = function (event) {
  $('#update').hide()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').hide()
  $('#destroy').show()
  $('#get-recipe').hide()
}

const onGetClick = function (event) {
  $('#update').hide()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').show()
  $('#destroy').hide()
  $('#get-recipe').hide()
}

const onGetsClick = function (event) {
  $('#update').hide()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').show()
  $('#destroy').hide()
  $('#get-recipe').hide()
}
// const onUpNavClick = function (event) {}

const addHandlers = () => {
  // $('#sign-up-form').on('submit', onSignUp)
  $('#sign-up-dropdown').on('submit', onSignUp)
  // $('#sign-in-form').on('submit', onSignIn)
  $('#sign-in-dropdown').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePw)
  // $('#sign-out-button').on('click', onSignOut)
  $('#sign-out-dropdown').on('submit', onSignOut)
  $('#create-recipe-form').on('submit', onCreateRecipe)
  $('#get-recipes-button').on('click', onGetRecipes)
  $('#get-recipe-form').on('submit', onGetRecipe)
  $('#update-recipe-form').on('submit', onUpdateRecipe)
  $('#destroy-recipe-form').on('submit', onDestroyRecipe)
  $('#create-button').on('click', onCreateClick)
  $('#update-button').on('click', onUpdateCLick)
  $('#destroy-button').on('click', onDestroyClick)
  $('#show-button').on('click', onGetClick)
  $('#saved-button').on('click', onGetsClick)
  // $('sign-up-nav').on('click', onUpNavClick)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onCreateRecipe,
  onGetRecipes,
  onGetRecipe,
  onDestroyRecipe
}
