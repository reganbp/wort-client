'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const recipeEvents = require('./recipes/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  recipeEvents.addHandlers()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#create').hide()
  $('#get').hide()
  $('#update').hide()
  $('#destroy').hide()
  $('#buttons').hide()
  $('.after-button').hide()
  $('#get-recipe').hide()
})
