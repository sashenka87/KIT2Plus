<link rel="stylesheet" type="text/css" href="./css.css" media="screen" />
<div id="wrap">
<div id="header">
   <?php $headers = array("Welcome", "Demographics", "KIT graphics", "Performance Task", "Questionnaire", "Done");
foreach ($headers as $nav) {
		if($nav == $headers[1]){
			echo '<li class="active" display="inline">'.$nav.'</li>'."\n";
		} else {
			echo '<li class="notactive" display ="inline">'.$nav.'</li>'."\n";
		}
	}?>
	</div>
	<div id="content">
       <h1>INDIVIDUAL DEMOGRAPHICS</h1>
<?php if($error){
	?><p class="error">Not all questions are awnsered. Please fill in the missing values</p><?php
}?>
<form method="POST" action=<?php echo '"./setdemographics.php?a='.$_GET['a'].'"'; ?>
<p>DIRECTIONS: Please fill in the appropriate responses.</p>
<p>GENDER:	
	<input type="radio" name="gender" value="m">Male		
	<input type="radio" name="gender" value="f">Female
</p>

<p>AGE: <input type="text" name="age"></p>

<p>
	ETHNICITY:<br />
	<input type="radio" name="ethnicity" value="non-hisp-white">Non-Hispanic White <br />
	<input type="radio" name="ethnicity" value="hisp">Hispanic <br />
	<input type="radio" name="ethnicity" value="black">Black <br />
	<input type="radio" name="ethnicity" value="am-indian">American Indian<br />
	<input type="radio" name="ethnicity" value="asian">Asian/Pacific Islander <br />
	<input type="radio" name="ethnicity" value="other">Other (Please specify: <input type="text" name="ethnicity-other">
</p>

<p>MAJOR: <input type="text" name="major"></p>

<p>CUMULATIVE COLLEGE CREDITS COMPLETED: <input type="text" name="cum-col-credits"></p>

<p>CUMULATIVE GPA: <input type="text" name="gpa"></p>
<p>ARE YOU A NATIVE ENGLISH SPEAKER: <input type="radio" name="natengspeaker" value="yes">yes <input type="radio" name="natengspeaker" value="no">no</p>

<p><input type="submit" value="Done"></p>
</form>
<div id="footer">
<h1>&nbsp;</h1>
</div>
</div>