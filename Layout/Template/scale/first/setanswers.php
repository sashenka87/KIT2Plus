<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("test", $con);
$sql = "UPDATE data SET";

for($tempvar = 1; $tempvar < 41; $tempvar++)
  {
    $themp = "q" . $tempvar;
    //echo "<br />" . $themp;
    $sql = $sql. " q" . $tempvar . "=" . $_GET[$themp] . ",";
  }

$sql = $sql . " q41=" .$_GET['q41'] . " WHERE nameIndex=" . $_GET['a'];

echo "<br/> " . $sql;

// Execute query
if(mysql_query($sql,$con))
{
echo "success\n";
}
else
{
  echo "didn't update\n".mysql_error();
}

mysql_close($con);

$URL="../second/1.php?a=" . $_GET['a'];

header ("Location: $URL"); 

?> 