const store = require('../store')
// const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

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
  document.getElementById('sign-in-form').reset()
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
  console.log('The sign in error is ', signInError)
}
const signOutSuccess = function (response) {
  console.log('Goodbye ', response)
  delete store.user
  console.log('the new store is ', store)
  $('#buttons').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
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
  $('.new-recipe').show()
  $('.new-recipe-response').html('Name: ' + response['recipe'].name)
}
const createRecipeFailure = function (response) {
  console.log('failure, response is ', response)
}
const getRecipesSuccess = function (response) {
  console.log('The response is ', response)
  // console.log(response['recipes'])
  // console.log('this is ', response['recipes'].name)
  // for (let key in response) {
  //   newHTML += '<li><h4>' + response['key'].name + '</h4></li>'
  // }
  let newHTML = ''
  response['recipes'].forEach(function (recipe) {
    console.log(recipe.user_id)
    newHTML += '<ul><li><h4>' + recipe.name + '<br/><small> Id: ' + recipe.id + '</small></h4></li></ul>'
  })
  $('#get-recipe').show()
  $('#get-recipe').html(newHTML)
  // const showRecipesHtml = showRecipesTemplate({ recipe: response.recipe })
  // $('.new-recipe').html(showRecipesHtml)
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
  $('.new-recipe').show()
  $('.new-recipe-response').html('Name: ' + response['recipe'].name)
}
const updateRecipeFailure = function (response) {
  console.log('The get error is ', response)
}
const destroyRecipeSuccess = function (successResponse) {
  console.log('Nice response is ', successResponse)
}
const destroyRecipeFailure = function (failResponse) {
  console.log('Bad get error is ', failResponse)
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
  destroyRecipeFailure
}
