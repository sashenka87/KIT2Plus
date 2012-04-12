<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create table
mysql_select_db("test", $con);

$sql = "UPDATE timelogs SET twotimes='"  . $_POST['times'] . "', twoanswer = '"  . $_POST['answer']. "' WHERE nameIndex = " . $_GET['a'];;

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

$URL="../scale/first/1.php?a=" . $_GET['a'];

header ("Location: $URL"); 

?>