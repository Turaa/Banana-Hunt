<!doctype html>
<html lang='en' class='no-js'>
<head>
<meta charset='utf-8' />
<title><?=isset($title) ? $title : 'Template for testprograms in JavaScript'?></title>
<link rel="stylesheet" href="style/stylesheet.css" title="General stylesheet">
<script src="../mall/js/less.min.js"></script>
<script src="../mall/js/modernizr.js"></script>
<title><?php echo $pageTitle; ?></title>
</head>
<body>

<!-- The body id helps with highlighting current menu choice -->
<body<?php if(isset($pageId)) echo " id='$pageId' "; ?>>

<header id="top"> 
<a href="index.php"><img src="img/header.png" alt="JavaScript" width=900 height=250></a> 


 <!-- Main navigation menu --> 
 <div class="shadow">
 <nav class="navmenu"> 
<a href="me.php">Hem</a>  
<a href="report.php">Redovisning</a>  
<a href="tester.php">Uppgifter</a>   
<a href="http://www.student.bth.se/~tutu13/JavaScript/kmom04/shop/index.php">Shoppen</a>
<a href="http://www.student.bth.se/~tutu13/JavaScript/kmom06/chat/index.php">Chatten</a>

 <a id="source-" href="source.php">Källkod</a> 
 </nav> 
 </div>
 </header> 
