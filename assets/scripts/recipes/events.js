'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')

// const dataCheck = function (data) {
//   for (const key in data) {
//     if (data[key] === '') {
//       delete data[key]
//     }
//   }
//   // console.log('dataCheck gives data as ', data)
//   return data
// }
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
  // console.log('data is ', data)
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
  // $('#update').hide()
  // $('.new-recipe').hide()
  // $('#create').hide()
  // $('#get').show()
  // $('#destroy').hide()
  // $('#get-recipe').hide()
  // $('#delete-recipe').hide()

  authApi.getRecipes()
    .then(authUi.getRecipesSuccess)
    .catch(authUi.getRecipesFailure)
}
// const onGetMyRecipes = function (event) {
//   event.preventDefault()
//   $('#update').hide()
//   $('.new-recipe').hide()
//   $('#create').hide()
//   $('#get').show()
//   $('#destroy').hide()
//   $('#get-recipe').hide()
//   authApi.getMyRecipes()
//     .then(authUi.getMyRecipesSuccess)
//     .catch(authUi.getMyRecipesFailure)
// }
// const onGetRecipe = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   if (data.id === '') {
//     authUi.getRecipeFailure()
//   } else {
//     authApi.getRecipe(data)
//       .then(authUi.getRecipeSuccess)
//       .catch(authUi.getRecipeFailure)
//   }
// }
const onGetRecipe = function (event) {
  console.log('clicked')
  event.preventDefault()
  const recipeId = $(event.target).closest('ul').attr('data-id')
  const data = { id: recipeId }
  console.log(data)
  authApi.getRecipe(data)
    .then(authUi.getRecipeSuccess)
    .catch(authUi.getRecipeFailure)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data ', data)

  // dataCheck(data)
  // console.log('dataCheck gives itselfs as ', dataCheck(data))
  authApi.updateRecipe(data)
    .then(authUi.updateRecipeSuccess)
    .catch(authUi.updateRecipeFailure)
}
const onDestroyRecipe = function (event) {
  event.preventDefault()
  const ratingId = $(event.target).closest('ul').attr('data-id')
  const data = { id: ratingId }
  console.log(data)
  authApi.destroyRecipe(data)
    .then(authUi.destroyRecipeSuccess)
    .then(onGetMyRecipes)
    .catch(authUi.destroyRecipeFailure)
}
const onGetMyRecipes = function () {
  authApi.getMyRecipes()
    .then(authUi.getMyRecipesSuccess)
    .catch(authUi.getMyRecipesFailure)
}
const onCreateClick = function (event) {
  $('#create').show()
}
// const onUpdateCLick = function (event) {
//   $('#update').show()
//   $('.new-recipe').hide()
//   $('#create').hide()
//   $('#get').hide()
//   $('#destroy').hide()
//   $('#get-recipe').hide()
//   $('#update-recipe-form').show()
//   $('#delete-recipe').hide()
//
//   authApi.getMyRecipes()
//     .then(authUi.getMyRecipesSuccess)
//     .catch(authUi.getMyRecipesFailure)
// }
const onDestroyClick = function (event) {
  $('#update').hide()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').hide()
  $('#destroy').show()
  // $('#destroy-recipe-form').show()
  $('#get-recipe').hide()
  $('#delete-recipe').hide()

  authApi.getMyRecipes()
    .then(authUi.getMyRecipesSuccess)
    .catch(authUi.getMyRecipesFailure)
}
const onGetClick = function (event) {
  $('#update').hide()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').show()
  $('#destroy').hide()
  $('#get-recipe').hide()
  $('#delete-recipe').hide()
  authApi.getMyRecipes()
    .then(authUi.getMyRecipesSuccess)
    .catch(authUi.getMyRecipesFailure)
}
const onShowUpdateRecipe = function (event) {
  // const ratingId = $(event.target).closest('ul').attr('data-id')
  // console.log(ratingId)
  event.preventDefault()
  console.log('clicked')
  const recipeId = $(event.target).closest('ul').attr('data-id')
  console.log(recipeId)
  $('#recipe-form-' + recipeId).show()
  $('.handlebars-form-hidden').hide()
  $('.handlebars-form-hidden-' + recipeId).hide()
}
const onShowRecipe = function (event) {
  event.preventDefault()
  const recipeId = $(event.target).closest('h1').attr('data-id')
  const data = { id: recipeId }
  console.log(data)
  authApi.showRecipe(data)
    .then(authUi.showRecipeSuccess)
    .catch(authUi.showRecipeFailure)
}

const addHandlers = () => {
  // $('#sign-up-form').on('submit', onSignUp)
  $('#sign-up-dropdown').on('submit', onSignUp)
  // $('#sign-in-form').on('submit', onSignIn)
  $('#sign-in-dropdown').on('submit', onSignIn)
  $('#change-password-dropdown').on('submit', onChangePw)
  // $('#sign-out-button').on('click', onSignOut)
  $('#sign-out-dropdown').on('submit', onSignOut)
  $('#create-recipe-form').on('submit', onCreateRecipe)
  // $('#get-recipes-button').on('click', onGetRecipes)
  // $('#get-recipe-form').on('submit', onGetRecipe)
  // $('#update-recipe-form').on('submit', onUpdateRecipe)
  // $('#destroy-recipe-form').on('submit', onDestroyRecipe)
  $('#create-button').on('click', onCreateClick)
  // $('#update-button').on('click', onUpdateCLick)
  // $('#destroy-button').on('click', onDestroyRecipe)
  // $('#show-button').on('click', onGetMyRecipes)
  // $('#show-button').on('click', onGetClick)
  // $('#saved-button').on('click', onGetsClick)
  // $('.delete-button').on('click', console.log('you have clicked me'))
  $('#my-recipes').on('click', onGetClick)
  // $('sign-up-nav').on('click', onUpNavClick)
  $('#all-recipes').on('click', onGetRecipes)
  $('.show-recipe').on('click', {value: 'data-id'}, console.log(event))
  // $('.remove-recipe').on('click', console.log('clicked'))
  $('.text-show').on('click', '.remove-recipe', onDestroyRecipe)
  $('.text-show').on('click', '.view-recipe', onGetRecipe)
  $('.text-show').on('click', '.show-recipe-to-update', onShowUpdateRecipe)
  $('.text-show').on('submit', '.update-recipes-form', onUpdateRecipe)
  $('.text-show').on('click', '.show-recipe', onShowRecipe)
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
  onDestroyRecipe,
  onUpdateRecipe,
  onShowUpdateRecipe,
  onShowRecipe
}
