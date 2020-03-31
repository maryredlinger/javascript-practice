import React from 'react'


//slice

var arraySlice = [5,6,7,8,9]
var arraySliceNew = arraySlice.slice(0,4)
console.log(arraySliceNew)


//remove duplicates
var string2 = "repeat how are you repeat"
var string1 = "repeat how are you"

const duplicates = (str1, str2) => {
  let str = str1 + " " + str2
  let array = str.split(" ")
  let newArr = []
  array.map(value => {
    if(!newArr.includes(value)){
      newArr.push(value)
    }
  })
  return newArr
};
let arrayJoining =(string1 + " " + string2).split(" ")
let set = new Set(arrayJoining)
let result = [...set]
console.log(result)

console.log(duplicates(string1, string2))


// Create a function that takes in any array of objects and returns a new array with only those of type cat.
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.

var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]

const onlyCats = (arr) => {
  let newArr = arr.filter(value => {
    if(value.type === "cat"){
      return value
    }
  })
  return newArr
}
console.log(onlyCats(animals))


const onlyNames = (arr) => {
  let newArr = arr.map(value => {
      return value.name
  })
  return newArr
}

console.log(onlyNames(animals))

// Write the code that accesses the ingredients property.
// Write the code that access the 3rd ingredient of the lunch object.
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
var {name, type, ingredients} = lunch

console.log(ingredients[2])

const greetingAgain = (arr) => {
  return `The ingredients for a PB and Banana sandwich are ${arr[0]}, ${arr[1]}, and ${arr[2]}.`
}
console.log(greetingAgain(ingredients))

var greeting2 = `The ingredients for a PB and Banana sandwich are ${ingredients[0]}, ${ingredients[1]}, and ${ingredients[2]}.`
console.log(greeting2)

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
  //Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

  var person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePLanet: "Earth"
  }

  var {firstName, lastName, homePLanet} = person

  var greeting = `${firstName} ${lastName} is from planet ${homePLanet}`
  console.log(greeting)


  return(
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{greeting}</h1>
    </div>
  )
}

export default JavaScript