<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("test", $con);
$sql = "UPDATE data SET ktype = '" . $_POST['ktype'] . "', ktop = "  . $_POST['ktop'] .  ", kleft = "  . $_POST['kleft'] . ", itype = '" . $_POST['itype'] . "', itop = "  . $_POST['itop'] .  ", ileft = "  . $_POST['ileft'] . ", ttype = '" . $_POST['ttype'] . "', ttop = "  . $_POST['ttop'] .  ", tleft = "  . $_POST['tleft'] . " WHERE nameIndex = " . $_GET['a'];

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

$URL="../text/kitquestions.php?a=" . $_GET['a'];

header ("Location: $URL"); 

?> 