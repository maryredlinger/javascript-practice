import React from 'react';

//Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

const addUp = (num) => {
  let newNum = 0
  for (let i=1; i<num+1; i++){
    newNum = newNum + i
  }
  return newNum
}

console.log(addUp(4))
console.log(addUp(13))


//Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

const preFill = (num1, num2) => {
  let newArr = []
    for (var j = 0; j < num1; j++) {
      newArr.push(num2);
    }  
  return newArr
}

console.log(preFill(6, 0))
console.log(preFill(4, 11))

//Clean Function: Create a function that filters false, null, 0 and blank values from an array.

var filterArrayValues = [58,  "abcd", true, null, "", false, 7,  0, " "]

const cleanFunction = (arr) => {
  let newArr = []
  for(let i=0; i<arr.length; i++){
    if (arr[i] !== null && arr[i] !== " " && arr[i] !== 0 && arr[i] !== false && arr[i].length !== 0) {
      newArr.push(arr[i])
    };    
  }
  return newArr
}

console.log(cleanFunction(filterArrayValues))


//Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]

var arrJoin = arr1.concat(arr2)

let set = new Set(arrJoin)
let result = [...set]

console.log(result)

const noDuplicates = (arr1, arr2) => {
  var arrJoin = arr1.concat(arr2)
  let set = new Set(arrJoin)
  let result = [...set]
  return result
}

console.log(noDuplicates(arr1, arr2))


//Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed

var fullString1 = "JAVASCRIPT is awesome"

const removeVowels = (str) => {
  var noVowels = []
  var arr = str.split("")
  for(let i=0; i<arr.length; i++){
    var currentLetter = arr[i].toLowerCase()
    if(currentLetter !== "a" && currentLetter !== "e" && currentLetter !== "i" && currentLetter !== "o" && currentLetter !== "u" && currentLetter !== "y"){
      noVowels.push(currentLetter)
    }
  }
  return noVowels.join("")
}

console.log(removeVowels(fullString1))

//Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)

var isPalindrome1 = "racecar"
var isPalindrome2 = "what's up"

const checkPalindrome = (str) => {
  var arr = str.split("")
  var reverse = arr.reverse()
  var reverseStr = reverse.join("")
  if(str === reverseStr){
    return `yup, "${str}" is a palindrome`
  } else {
    return `nope, "${str}" is not a palindrome`
  }
}

console.log(checkPalindrome(isPalindrome1))
console.log(checkPalindrome(isPalindrome2))


//Create a function that takes in a string and returns only the middle value
var testString1 = "boogeyman"

const middleValue = (str) => {
  var arr = str.split("")
  for (let i=0; i<arr.length; i++){
    var totalLength = arr.length
    var middleIndex = totalLength / 2
    var middleLetter = arr[middleIndex]
    if(middleLetter%2 !== 0){
      middleIndex = (totalLength - 1) / 2
      middleLetter = arr[middleIndex]
    }
  }
  return middleLetter
}
console.log(middleValue(testString1))




function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
