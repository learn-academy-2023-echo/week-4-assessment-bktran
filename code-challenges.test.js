// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeAndShuffle", () => {
  it("Removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
//===> ReferenceError: removeAndShuffle is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare removeAndShuffle with 1 parameter as array
// slice array at index 1
// shuffling algorithm on sliced array
// return new array

const removeAndShuffle = (array) => {
  let newArr = array.slice(1)
  //Fisher-Yates shuffling algorithm
  for (let i = newArr.length - 1; i > 0; i--) { //for loop, starts at last index and loop to first index on each iteration
    let j = Math.floor(Math.random() * (i + 1)) // generate a random index from 0 to current iteration index
    // swap values at i and j indices
    let temp = newArr[i]
    newArr[i] = newArr[j]
    newArr[j] = temp
  }
  return newArr
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("tally", () => {
  it("Returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(tally(votes1)).toEqual(11)
    expect(tally(votes2)).toEqual(-31)
  })
})

// ===> ReferenceError: tally is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare tally function with 1 obj parameter
// return upvotes - downvotes

const tally = (obj) => {
  return obj.upVotes - obj.downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDupe", () => {
  it("returns one array with no duplicate values", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDupe(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// ===> ReferenceError: noDupe is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare noDupe with 2 array parameters
// assign usedWords = []
// assign outputArr = []
// loop over arr1
  // on each iteration
  // if arr1[i] is not included in usedWords
    // push arr1[i] to outputArr
    // push arr1[i] to usedWords
// loop over arr2
  // on each iteration
  // if arr2[i] is not included in usedWords
    // push arr2[i] to outputArr
    // push arr2[i] to usedWords
// return outputArr

const noDupe = (arr1, arr2) => {
  let usedWords = []
  let outputArr = []
  for (let i = 0; i < arr1.length; i++){
    if (!usedWords.includes(arr1[i])){
      outputArr.push(arr1[i])
      usedWords.push(arr1[i])
    }
  }
  for (let i = 0; i < arr2.length; i++){
    if (!usedWords.includes(arr2[i])){
      outputArr.push(arr2[i])
      usedWords.push(arr2[i])
    }
  }
  return outputArr
}

//Stretch

// const noDupe = (...arrays) => {
//  let allArrays = [].concat(...arrays) // make one big array
//  //filters value where first index of said value equals current index
//  return allArrays.filter((value, index, array) => array.indexOf(value) === index) 
// }