<p id="demo"></p>

<script>
const d = new Date();
let time = d.toLocaleTimeString();
let date = d.toLocaleDateString();
text = date+"T"+time;
document.getElementById("demo").innerHTML = text;  //29.10.2023T16:33:58
</script>
