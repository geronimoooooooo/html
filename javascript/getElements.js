https://www.w3schools.com/JSREF/prop_text_value.asp
-----------------------------------------------------------------------
<script type="text/javascript">
    function Validate() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }
</script>
-----------------------------------------------------------------------
<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>
<button onclick="displayDate()">The time is?</button>
<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>
<p id="demo"></p>
-----------------------------------------------------------------------
    Javascript Changing Variable On Button Click
https://www.learn-codes.net/javascript/javascript-changing-variable-on-button-click/
-----------------------------------------------------------------------
 var target = document.getElementById( "target" );
 target.innerHTML = "<td>Hello <b>World</b>!</td>";
$( target ).html( "<td>Hello <b>World</b>!</td>" );
-----------------------------------------------------------------------
<body>
    <div id="greet"></div>
    <script>
        document.getElementById("greet").innerHTML = "Hello World!";
    </script>
</body>
-----------------------------------------------------------------------
-----------------------------------------------------------------------
-----------------------------------------------------------------------
    

   
