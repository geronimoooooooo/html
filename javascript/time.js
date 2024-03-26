<p id="demo"></p>

<script>
const d = new Date();
let time = d.toLocaleTimeString();
let date = d.toLocaleDateString();
text = date+"T"+time;
document.getElementById("demo").innerHTML = text;  //29.10.2023T16:33:58
</script>

https://www.flypenguin.de/2021/08/18/javascript-iso-date-with-local-timezone/

ISO
https://stackoverflow.com/questions/34053715/how-to-output-date-in-javascript-in-iso-8601-without-milliseconds-and-with-z
https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

let now = new Date();
console.log(now.toISOString());
console.log(now.toISOString().slice(0,-5)+"Z");
console.log(now.toISOString().replace(/[.]\d+/, ''));
console.log(now.toISOString().replace('T', ' ').replace(/[.]\d+/, ''));

2024-03-15T23:06:46.534Z
2024-03-15T23:06:46Z
2024-03-15T23:06:46Z
2024-03-15 23:06:46Z

########################################################################################
let currentDate = new Date();
console.log(currentDate);
currentDate.setMinutes(currentDate.getMinutes() - 10)
console.log(currentDate)
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
