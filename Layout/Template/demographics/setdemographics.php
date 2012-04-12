<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create table
mysql_select_db("test", $con);
$sql = "CREATE TABLE data
(
  nameIndex int,
  gender varchar(1),
  age int,
  ethnicity text,
  major text,
  cumcolcredits int,
  gpa text,
  nateng varchar(1),
  ktype varchar(1),
  ktop int,
  kleft int,
  itype varchar(1),
  itop int,
  ileft int,
  ttype varchar(1),
  ttop int,
  tleft int,
  circle1 text,
  circle2 text,
  circle3 text,
  circle4 text,
  circle5 text,
  question1 text,
  question2 text,
  q1 int,
  q2 int,
  q3 int, 
  q4 int,
  q5 int,
  q6 int,
  q7 int,
  q8 int,
  q9 int,
  q10 int,
  q11 int,
  q12 int,
  q13 int,
  q14 int,
  q15 int,
  q16 int,
  q17 int,
  q18 int,
  q19 int,
  q20 int,
  q21 int,
  q22 int,
  q23 int,
  q24 int,
  q25 int,
  q26 int,
  q27 int,
  q28 int,
  q29 int,
  q30 int,
  q31 int,
  q32 int,
  q33 int,
  q34 int,
  q35 int,
  q36 int,
  q37 int,
  q38 int,
  q39 int,
  q40 int,
  q41 int,
  q42 int,
  q43 int,
  q44 int,
  q45 int,
  q46 int,
  q47 int,
  q48 int,
  q49 int,
  q50 int,
  q51 int,
  q52 int,
  q53 int,
  q54 int,
  q55 int,
  q56 int,
  q57 int,
  q58 int,
  q59 int,
  q60 int,
  q61 int,
  q62 int,
  q63 int,
  q64 int,
  q65 int,
  q66 int,
  q67 int,
  q68 int,
  q69 int,
  q70 int,
  q71 int,
  q72 int,
  q73 int,
  q74 int,
  q75 int,
  q76 int,
  q77 int,
  q78 int,
  q79 int,
  q80 int,
  q81 int,
  q82 int,
  personalq text,
  schoolq text  
  )";

// Execute query
if(mysql_query($sql,$con))
{
echo "success\n";
}
else
{
  echo "didn't make table\n".mysql_error();
}
$sql = "INSERT INTO data (nameIndex, gender, age, ethnicity, major, cumcolcredits, gpa, nateng) VALUES (" . $_GET['a']. ", '" .$_POST['gender']. "', " .$_POST['age']. ", '" .$_POST['ethnicity']. "', '" .$_POST['major']. "', " . $_POST['cum-col-credits'] . "," .$_POST['gpa']. ", '" .$_POST['natengspeaker']. "')";
if(mysql_query($sql, $con))
  {
    echo "\nwhhooo!!!\n";
  }
else
  {
    echo "<br/>boo!" . mysql_error();
  }

$result = mysql_query("SELECT * FROM data WHERE nameIndex='" . $_GET['a'] . "'");

$number = 0;
echo "<br/>"  . $sql;
while($row = mysql_fetch_array($result))
  {
    echo $row['nameIndex'];// .$row['gender'] .$row['age'] .$row['ethnicity'];
  echo "<br />";
  $number = $row['age'];
  }

mysql_close($con);

$URL="../text/kitgraphicsintroduction.php?a=" . $_GET['a'];

header ("Location: $URL"); 

?> 
