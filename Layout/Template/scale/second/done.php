<link rel="stylesheet" type="text/css" href="./css.css" media="screen" />
<div id="wrap">
<div id="header">
   <?php $headers = array("Welcome", "Demographics", "KIT graphics", "Performance Task", "Questionnaire", "Done");
foreach ($headers as $nav) {
		if($nav == $headers[5]){
			echo '<li class="active" display="inline">'.$nav.'</li>'."\n";
		} else {
			echo '<li class="notactive" display ="inline">'.$nav.'</li>'."\n";
		}
	}?>
	</div>
	<div id="content">
<h1>Study completed. Thank you for your participation!</h1>
<p>Please close all browser windows !</p>
</div>
</div>