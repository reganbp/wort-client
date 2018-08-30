const store = require('../store')
// const sand = require('../sandbox')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const showMyRecipesTemplate = require('../templates/my-recipe-listing.handlebars')
const showOneRecipeTemplate = require('../templates/view-one-listing.handlebars')

const signUpSuccess = function (signUpResponse) {
  // document.getElementById('sign-up-dropdown').reset()
  $('#in-success').modal()
}
const signUpFailure = function (signUpError) {
  // console.log('The sign up error is ', signUpError)
  document.getElementById('sign-up-dropdown').reset()
  $('#up-form-fail').modal()
}
const signInSuccess = function (response) {
  // console.log('response ', response)
  store.user = response.user
  // document.getElementById('sign-in-form').reset()
  document.getElementById('sign-in-dropdown').reset()
  // $('#buttons').show()
  $('.before-button').hide()
  $('.after-button').show()
  // $('#sign-up-form').hide()
  // $('#sign-in-form').hide()
  // $('#create').show()
  // $('#get').show()
  // $('#update').show()
  // $('#destroy').show()
}
const signInFailure = function (signInError) {
  // console.log('The sign in error is ', signInError)
  document.getElementById('sign-in-dropdown').reset()
  $('#in-form-fail').modal()
}
const signOutSuccess = function (response) {
  // console.log('Goodbye ', response)
  delete store.user
  // console.log('the new store is ', store)
  document.getElementById('change-password-dropdown').reset()
  document.getElementById('sign-in-dropdown').reset()
  document.getElementById('sign-up-dropdown').reset()
  // $('#buttons').hide()
  $('.before-button').show()
  $('.after-button').hide()
  // $('#update').hide()
  // $('.new-recipe').hide()
  // $('#create').hide()
  // $('#get').hide()
  // $('#destroy').hide()
  // $('#get-recipe').hide()
  // $('#delete-recipe').hide()
  // $('#sign-up-form').hide()
  // $('#sign-in-form').show()
}
const signOutFailure = function (signOutError) {
  // console.log('The sign in error is ', signOutError)
  $('#out-fail').modal()
}
const passwordPass = function () {
  // console.log('password passed')
  document.getElementById('change-password-dropdown').reset()
  $('#in-success').modal()
}
const passwordFail = function () {
  // console.log('password failed')
  document.getElementById('change-password-dropdown').reset()
  $('#pass-fail').modal()
}
const createRecipeSuccess = function (response) {
  // console.log('you created a recipe, the respose is ', response)
  // console.log('the store is ', store)
  document.getElementById('create-recipe-form').reset()
  $('#create').hide()
  // $('.new-recipe').show()
  // $('.new-recipe-response').html('Name: ' + response['recipe'].name)
  const newHTML = '<h2>New Recipe!</h2><li><h3>' + response['recipe'].name + '</h3><br/><h4> Description: ' + response['recipe'].description + '<br/> Extract: ' + response['recipe'].extract + '<br/>Grains: ' + response['recipe'].grains + '<br/>Hops: ' + response['recipe'].hops + '<br/>Yeast: ' + response['recipe'].yeast + '<br/>Directions: ' + response['recipe'].directions + '</h4></li>'
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
}
const createRecipeFailure = function (response) {
  // console.log('failure, response is ', response)
  document.getElementById('create-recipe-form').reset()
  $('#create-fail').modal()
}
const getRecipesSuccess = function (response) {
  const showRecipesHtml = showRecipesTemplate({ recipes: response.recipes })
  $('#get-recipe').show()
  $('#get-recipe').html(showRecipesHtml)
}

const getRecipesFailure = function (getRecipesError) {
  // console.log('The get error is ', getRecipesError)
  document.getElementById('get-recipe-form').reset()
  $('#get-fail').modal()
}
const getMyRecipesSuccess = function (response) {
  // console.log('The my reciperesponse is ', response)
  // console.log(response.recipes)
  const data = { recipes: [] }
  response['recipes'].forEach(function (recipe) {
    if (recipe.user_id === store.user.id) {
      data.recipes.unshift(recipe)
    }
  })
  // console.log('data is', data)
  const showMyRecipesHtml = showMyRecipesTemplate({ recipes: data.recipes })
  $('#get-recipe').show()
  $('#get-recipe').html(showMyRecipesHtml)
}
const getRecipeSuccess = function (response) {
  const showRecipeHtml = showOneRecipeTemplate({ recipes: response })
  $('#get-recipe').show()
  $('#get-recipe').html(showRecipeHtml)
  $('.update-recipes-form').hide()
}
const getRecipeFailure = function (getRecipeError) {
  console.log('The get error is ', getRecipeError)
  // document.getElementById('get-recipe-form').reset()
  // $('#get-fail').modal()
}
const updateRecipeSuccess = function (response) {
  const showRecipeHtml = showOneRecipeTemplate({ recipes: response })
  $('#get-recipe').show()
  $('#get-recipe').html(showRecipeHtml)
  $('.update-recipes-form').hide()
}
const updateRecipeFailure = function (response) {
  // console.log('The get error is ', response)
  document.getElementById('update-recipe-form').reset()
  $('#update-fail').modal()
}
const destroyRecipeSuccess = function (successResponse) {
  // console.log('Nice response is ', successResponse)
  // document.getElementById('destroy-recipe-form').reset()
  // $('#destroy-pass').modal()
  // $('#get-recipe').hide()
  // $('#destroy').hide()
  // $('#delete-recipe').show()
  // $('#delete-recipe').html('<h3>Recipe Removed</h3>')
}
const destroyRecipeFailure = function (failResponse) {
  // console.log('Bad get error is ', failResponse)
  document.getElementById('destroy-recipe-form').reset()
  $('#update-fail').modal()
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
  updateRecipeFailure,
  destroyRecipeSuccess,
  destroyRecipeFailure,
  getMyRecipesSuccess
}
