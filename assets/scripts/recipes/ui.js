const store = require('../store')
// const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const signUpSuccess = function (signUpResponse) {
  // console.log('signUpResponse ', signUpResponse)
  document.getElementById('sign-up-dropdown').reset()
  // $('#sign-up-modal').modal('hide')
  // document.getElementById('sign-up-form').reset()
  // document.getElementById('sign-in-form').reset()
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
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-in-dropdown').reset()
  $('#buttons').show()
  $('.before-button').hide()
  $('.after-button').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
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
  $('#buttons').hide()
  $('.before-button').show()
  $('.after-button').hide()
  $('#update').hide()
  $('.new-recipe').hide()
  $('#create').hide()
  $('#get').hide()
  $('#destroy').hide()
  $('#get-recipe').hide()
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
  const newHTML = '<h2>New Recipe!</h2><li><h3>' + response['recipe'].name + '</h3><br/><h4> Description: ' + response['recipe'].description + '<br/> Extract: ' + response['recipe'].extract + '<br/>Grains: ' + response['recipe'].hops + '<br/>Yeast: ' + response['recipe'].yeast + '<br/>Directions: ' + response['recipe'].directions + '</h4></li>'
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
}
const createRecipeFailure = function (response) {
  // console.log('failure, response is ', response)
  document.getElementById('create-recipe-form').reset()
  $('#create-fail').modal()
}
const getRecipesSuccess = function (response) {
  // console.log('The response is ', response)
  document.getElementById('get-recipe-form').reset()
  let newHTML = ''
  response['recipes'].forEach(function (recipe) {
    // console.log(recipe.user_id)
    if (recipe.name === '') {
      recipe.name = 'untitled'
    }
    newHTML += '<li><h4>' + recipe.name + '<br/><small> Id: ' + recipe.id + '</small></h4></li>'
  })
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
  // const showRecipesHtml = showRecipesTemplate({ recipe: response.recipe })
  // $('.new-recipe').html(showRecipesHtml)
}

const getRecipesFailure = function (getRecipesError) {
  // console.log('The get error is ', getRecipesError)
  document.getElementById('get-recipe-form').reset()
  $('#get-fail').modal()
}
const getMyRecipesSuccess = function (response) {
  // console.log('The my reciperesponse is ', response)
  // console.log('user is ', store.user.id)
  // console.log('store is ', store)
  document.getElementById('get-recipe-form').reset()
  let newHTML = ''
  response['recipes'].forEach(function (recipe) {
    // console.log(recipe.user_id)
    if (recipe.user_id === store.user.id) {
      newHTML += '<ul><li><h4>' + recipe.name + '<br/><small> Id: ' + recipe.id + '</small></h4></li></ul>'
    }
  })
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
}
const getRecipeSuccess = function (response) {
  // console.log('The response is ', response)
  document.getElementById('get-recipe-form').reset()
  const newHTML = '<li><h3>' + response['recipe'].name + '</h3><br/><h4> Description: ' + response['recipe'].description + '<br/> Extract: ' + response['recipe'].extract + '<br/>Grains: ' + response['recipe'].hops + '<br/>Yeast: ' + response['recipe'].yeast + '<br/>Directions: ' + response['recipe'].directions + '</h4></li>'
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
}
const getRecipeFailure = function (getRecipeError) {
  // console.log('The get error is ', getRecipeError)
  document.getElementById('get-recipe-form').reset()
  $('#get-fail').modal()
}
const updateRecipeSuccess = function (response) {
  // console.log('The response is ', response)
  // $('.new-recipe').show()
  // $('.new-recipe-response').html('Name: ' + response['recipe'].name)
  const newHTML = '<li><h3>' + response['recipe'].name + '</h3><br/><h4> Description: ' + response['recipe'].description + '<br/> Extract: ' + response['recipe'].extract + '<br/>Grains: ' + response['recipe'].hops + '<br/>Yeast: ' + response['recipe'].yeast + '<br/>Directions: ' + response['recipe'].directions + '</h4></li>'
  document.getElementById('update-recipe-form').reset()
  $('#update').hide()
  $('#delete-recipe').show()
  $('#delete-recipe').html('<h3>Recipe Updated</h3>')
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
}
const updateRecipeFailure = function (response) {
  // console.log('The get error is ', response)
  document.getElementById('update-recipe-form').reset()
  $('#update-fail').modal()
}
const destroyRecipeSuccess = function (successResponse) {
  // console.log('Nice response is ', successResponse)
  document.getElementById('destroy-recipe-form').reset()
  // $('#destroy-pass').modal()
  $('#get-recipe').hide()
  $('#destroy').hide()
  $('#delete-recipe').show()
  $('#delete-recipe').html('<h3>Recipe Removed</h3>')
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
