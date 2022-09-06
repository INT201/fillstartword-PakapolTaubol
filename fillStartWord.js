const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if (word === undefined || word === null) { // return undefined
    return undefined 
  } 
  if (word.includes(startWord)) { // return แค่ word
    return word 
  } 
  return startWord + word
}
let a =  "first"
let b
console.log(fillStartWord(a, b))
module.exports = fillStartWord
