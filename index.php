<!DOCTYPE html>
<html lang="sv">
<html>
<head>
<meta charset="utf-8"/>
<link href='http://fonts.googleapis.com/css?family=Reenie+Beanie' rel='stylesheet' type='text/css'> 
<link href="style.css" rel="stylesheet" type="text/css">

<!--TITLE-->
<title>Banana Hunt</title>

<div class="gameheader">
<img src="img/header.png" alt="logo" class="logo"> 
</div>
</head>

<!--BODY BEGINS-->

<!--WRAPPER-->
<div class="wrapper">
<input type="button" onclick="toggleSound()" value="Music Off" id="toggle-btn">
<body onload="oneTimeTasks()" onKeyPressed="keyFunction(e)">
<h2>CATCH AS MANY BANANAS YOU CAN IN 60 SECONDS!</h2>
<h4>MOVE WITH THE RIGHT AND LEFT ARROWS</h4>
<canvas id="canvas" width="900" height="500">
Your browser doesn't support the HTML5 element 'Canvas'.
</canvas>

</div>


<!--WRAPPER ENDS-->

<script src="../mall/js/jquery.js"></script>
<script src="../mall/turas.js"></script>
<script src="main.js"></script>
</body>
</html>

</html>
