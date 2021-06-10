// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?
new Set([1,1,2,2,3,4]) // it returns a set like -> {1,2,3,4}


// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("") // it return a string like -> "ref"


// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);  
m.set([1,2,3], false);

//  it returns a map like below
// {Array(3) => true, Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// function hasDuplicate (arr){
//   if (new Set(arr).size === arr.length){
//     return false
//   }
//   return true
// }

const hasDuplicate = (arr) => new Set(arr).size !== arr.length 


vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
  const vowels = 'aeiou'
  const newMap = new Map()
  let count = 0
  for (let v of str){
    if (vowels.indexOf(v) !== -1){
      if (newMap.has(v)){
        count +=1
        newMap.set(v, count)
      }
    
      else{
        count = 1
        newMap.set(v, count)
      }
    }
  
  
  }
  return newMap
}
