################## JavaScript ##################
<input type="button" value="Hide text" onclick="document.getElementById('p1').style.visibility='hidden'">
<input type="button" value="Show text" onclick="document.getElementById('p1').style.visibility='visible'">


################## jQuery ##################
var isVisible = $( "#myDiv" ).is( ":visible" );
var isHidden = $( "#myDiv" ).is( ":hidden" );
