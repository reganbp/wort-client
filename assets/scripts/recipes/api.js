'use strict'
const config = require('../config.js')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}
const changePw = function (data) {
  console.log('store is ', store)
  console.log('token is ', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getRecipes = function () {
  console.log('did I get recipes?')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getRecipe = function (data) {
  console.log('data is ', data)
  console.log('data.id is ', data.id)
  console.log('store is ', store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createRecipe = function (data) {
  console.log('the data is ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes',
    data: {recipe: data},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut,
  createRecipe,
  getRecipes,
  getRecipe
}
