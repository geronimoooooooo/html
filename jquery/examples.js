$()... shorthand notation/factory function
jQuery used to select HTML elements
jQuery settings überschreiben html settings bei Elementen

$(function() {  

  $("p").css("color", "red");  
  $("input").css("background-color", "violet");  
  $(this).css("background-color", "lightblue");


if checkbox checked https://www.javatpoint.com/jquery-prop

$("li").each(function(){  
alert($(this).text())  

var d = $("#d2").html();
$("#d1").replaceWith(d);
  
  //<span id = "s1"> Click me </span> 
  if ($(this).is("#s1")) {
  $("#s1").text("This is first span element").css({"background-color": "yellow", "font-size": "20px"});
  $("h2").nextAll().css({"color": "red", "border": "2px solid red"});
    
  if($(this).prop("checked") == true){
    $('form input[type="submit"]').prop("disabled", false);
  }
  else if($(this).prop("checked") == false){
      $('form input[type="submit"]').prop("disabled", true);
  }

$(this).hide(); //current element
}); 
