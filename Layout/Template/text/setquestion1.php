<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create table
mysql_select_db("test", $con);
$sql = "CREATE TABLE timelogs
 (
  nameIndex int,
  onetimes longtext,
  oneanswer longtext,
  twotimes longtext,
  twoanswer longtext
)";

// Execute query
if(mysql_query($sql,$con))
{
echo "success\n";
}
else
{
  echo "didn't update\n".mysql_error();
}

$sql = "INSERT INTO timelogs (nameIndex, onetimes, oneanswer) Values (" . $_GET['a'] . ", '"  . $_POST['times'] . "', '"  . $_POST['answer']. "')";

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

$URL="../text/question2.php?a=" . $_GET['a'];

header ("Location: $URL"); 

?>