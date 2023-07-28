################## JavaScript ##################
<input type="button" value="Hide text" onclick="document.getElementById('p1').style.visibility='hidden'">
<input type="button" value="Show text" onclick="document.getElementById('p1').style.visibility='visible'">

css
.gone-baby-gone{ display: none;} removes it from your webpage, as if it never existed in your code
.hollow-man{ visibility: hidden;} only turns it invisible: it still takes up the space it was supposed to


################## jQuery ##################
var isVisible = $( "#myDiv" ).is( ":visible" );
var isHidden = $( "#myDiv" ).is( ":hidden" );
