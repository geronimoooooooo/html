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
+ nicht primitive datentypen (reference types): hier kann der Wert verändert werden
++ Arrays
++ Objects
++ nicht vergleichen, da Referenz und nicht Wert/Inhalt verglichen wird
+ `String literal text ${expression}` String mit backtick
+ Wenn String zu lang dann mit  backslash  "str... \ den Zeilenumbruch" einleiten
+ template String: `String literal text ${expression}`
+ Auflistung fast aller Funktionen die auf String, Mathe angewendet werden können
+ check the type of a var: typeof var
+ Casting: Converting von einem data type in einen anderen

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

termanry operator
isBool ? doTrue:doFalse

#####################################################################################
################################ 05 - Arrays ########################################

Array is collection of different data types
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types

#####################################################################################
################################ 05 - Arrays ########################################
#####################################################################################
################################ 05 - Arrays ########################################
#####################################################################################
################################ 05 - Arrays ########################################
#####################################################################################
################################ 05 - Arrays ########################################
