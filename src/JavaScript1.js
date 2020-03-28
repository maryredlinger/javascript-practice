import React from 'react'

//Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3]

var arr2 = [7, 8, 2, 1, 5, 4]

var arrJoin = arr1.concat(arr2)

const noDuplicates = (array) => {
  return array.filter((a, b) => 
  array.indexOf(a) === b)
}

console.log(noDuplicates(arrJoin))

const removeDuplicates = (array) => {
  let newArr = []
  array.map(value => {
    if(!newArr.includes(value)){
      newArr.push(value)
    }
  })
  return newArr
};

console.log(removeDuplicates(arrJoin))

//Create a function that takes in a string and returns a new string with all the vowels removed.

var str = "javascript is awesome"

const noVowels = (str) => {
  let arr = str.split("")
  let newArr = arr.filter(value => {
    let currentLetter = value.toLowerCase()
    if(currentLetter !== "a" && currentLetter !== "e" && currentLetter !== "i" && currentLetter !== "o" && currentLetter !== "u" && currentLetter !== "y"){
      return currentLetter
    }
  })
  return newArr.join("")
}

console.log(noVowels(str))

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const onlyLetter = (arr) => {
  let newArr = arr.filter(value => {
    if(typeof(value) === "string"){
      return value
    }
  })
  return newArr
}

console.log(onlyLetter(comboArr))

//Write a function that takes in an array and returns a new array with only odd numbers.

var arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdd = (arr) => {
  let newArr = arr.filter(value => {
    if(value%2 !== 0){
      return value
    }
  })
  return newArr
}

console.log(onlyOdd(arr2))

//Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

var arr1 = [3, 9, 15, 4, 10]

const multiplyThree = (arr) => {
  var newArr = arr.map(value => 
    value * 10
  )
  return newArr
}

console.log(multiplyThree(arr1))


const JavaScript = () => {
  return(
    <h1>JS PAGE</h1>
  )
}

export default JavaScript