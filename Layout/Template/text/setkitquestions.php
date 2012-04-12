<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("test", $con);
$sql = "UPDATE data SET circle1 = '" . $_POST['kit1'] . "', circle2 = '"  . $_POST['kit2'] .  "', circle3 = '"  . $_POST['kit3'] . "', circle4 = '" . $_POST['kit4'] . "', circle5 = '"  . $_POST['kit5'] .  "' WHERE nameIndex = " . $_GET['a'];

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

$URL="../text/questionintro.php?a=" . $_GET['a'];

header ("Location: $URL"); 

?>