####################################################################
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock

<body onload="startTime()">
<script type="text/javascript">
function startTime() {
	  const today = new Date();
	  let h = today.getHours();
	  let m = today.getMinutes();
	  let s = today.getSeconds();
	  m = checkTime(m);
	  s = checkTime(s);
	  document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
	  setTimeout(startTime, 1000);
	}

function checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}
</script>
<div class="container d-flex justify-content-end">
	<div id="time"></div>
</div>
<div class=container-fluid">
	<div class="row float-end">
		<div id="time" class="me-3"></div>
	</div>
</div>
################################################
setInterval()
setTimeout(function(){
}, 5000);
clearTimeout(myVar)

<button onclick="setTimeout(myFunction, 3000)">
  var d = new Date();
.innerHTML = d.toLocaleTimeSTring();
