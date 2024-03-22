https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/readMe.md
https://codepen.io/pen/?editors=1111
logged gmail

###################################################################################
################################ 01 - Data Types ##################################
+ >node -v
+ strg+shift+j: open console
+ Die Google V8 Engine übersetzt den Javascript Code in machine code.
+ In der Console (strg+shift+j) von Google JavaScript schreiben
+ //comments /* ... */
+ "" double quotes, '' single quotes, ` backtick für Strings
+ Use Visual Studio Code for JavaScript
+ Visual Studio Code extension: Live Server von Ritwick Dey
+ Add JavaScript to a web page as inline, internal, external script
+ JavaScript primitive data types: String, Number, Boolean, undefined, Null
++ undefined: Eine Var is undefined, wenn ihr gar kein value zugewiesen wird. a declared variable without a value
++ null: Eine Var is null, wenn der value leer ist (empty value: let emptyValue = null) 
+ Variables are containers of data. Variables are used to store data in a memory location. 
When a variable is declared, a memory location is reserved. When a variable is assigned to 
a value (data), the memory space will be filled with that data. 
To declare a variable, we use var, let, or const keywords.

###################################################################################
################################ 02 - Data Types ##################################
https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md

+ Everything in JavaScript is an object
+ immutable types (prmitive data types): sobald einmal der Wert zugewiesen wurde, kann dieser nicht mmehr verändert werden.
Möchte man den Wert verändern, dann wird ein komplett neuer Wert zugewiesen.
+ compare mit ==
+ nicht primitive datentypen (reference types): hier kann der Wert verändert werden
++ Arrays
++ Objects
++ nicht vergleichen, da Referenz und nicht Wert/Inhalt verglichen wird
+ `String literal text ${expression}` String mit backtick
+ Wenn String zu lang dann mit  backslash  "str... \ den Zeilenumbruch" einleiten
+ template String: `String literal text ${expression}`
+ Auflistung fast aller Funktionen die auf String, Mathe angewendet werden können
+ check the type of a var: typeof var
+ Casting: Converting von einem data type in einen anderen. 
++ From String to real number! parseInt(), parseFloat(), Number(), Plus sign(+)
+ includes(), concat()

#####################################################################################
################################ 03 - Boolean, Operators, Date ######################

true: -1,1,"a",
false: 0, null, undefined, ""

let number = prompt('Enter number', 'number goes here')
console.log(number)
alert(message)
const agree = confirm('Are you sure you like to delete? ')

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

#####################################################################################
################################ 04 - Conditionals ##################################

if(){}
else if(){}
else(){

ternary operator
isBool ? doTrue:doFalse

#####################################################################################
################################ 05 - Arrays ########################################
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?retiredLocale=de

Array is collection of different data types
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types

Array functions: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

#####################################################################################
################################ 06 - Loops #########################################

for(initialization, condition, increment/decrement){
for(let i = 0; i <= 5; i++){
  console.log(i)
}

const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
#####################################################################################
################################ 07 - Functions #####################################

Declaration function
Expression function
Anonymous function
Arrow function

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
-----------------
Anonymous function or without name
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
--------------------------
// Declaring a function with default value
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)
----------------------------
#####################################################################################
################################ 08 - Scope & Objects ###############################

+ local (in block or function scope)
+ global (alles ohne var, let, const)
+ var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc
+ let for any value which change 
+ const for any constant value, and for an array, object, arrow function and function expression.
-------------------------------
An empty object
const person = {}

const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'

#####################################################################################
################################ 09 - Higher Order Function #########################

+ Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.
+ forEach, map, filter, reduce, find, every, some, and sort

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)


const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
const score = scores.find((user) => user.score > 80)
console.log(score)

#####################################################################################
################################ 10 - Sets and Maps #################################

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map.get('Finland'))

#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
#####################################################################################
