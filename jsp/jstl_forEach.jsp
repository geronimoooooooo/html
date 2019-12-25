<head>
<script type="text/javascript">

   function changeFunc($i) {
    alert($i);
   }

  </script>
<title>Using GET Method to Read Form Data</title>
</head> 
 
 <c:forEach items="${list_names}" var="startTime" varStatus="status">
  <option value="${status.index}">${startTime}</option>
</c:forEach>

<form action="index.jsp">
  <p>
    <select name="top5" size="1" onchange="changeFunc(value)">
    
    <c:forEach items="${list_names}" var="name" varStatus="status">
      <option value="${name}">${name}</option>
    </c:forEach>
    
      <option>Heino</option>
      <option>Heino2</option>
    </select>
  </p>
  <td > <input formaction="http://localhost/soscon/index.jsp"  formmethod="post" type="submit" value="Display"/></td>
</form>
-----------------------------------------------------------------------------------
<select name="item">
<c:forEach items="${combo}" var="id">
    <option value="${id}">${id}</option>
</c:forEach>
</select>

<form action="some.jsp">
  <select name="item">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <input type="submit" value="Submit">
</form>
in some.jsp

request.getParameter("item");
this line will return the selected option (from the example it is: 1, 2 or 3)
