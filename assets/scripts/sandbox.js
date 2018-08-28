'use strict'

const newHTML = function (recipe) {
  const newstring = '<ul><li><h4>' + recipe.name + '<br/><small> Id: ' + recipe.id + '</small></h4></li></ul>'
  return newstring
}

const addHandlers = () => {

}
module.exports = {
  addHandlers,
  newHTML
}
