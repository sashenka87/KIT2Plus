<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; 	charset=utf-8" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<link rel="stylesheet" type="text/css" href="Layout/Theme/css.css" media="screen" />
<title>Welcome </title>
<?php if(sizeof($oController->getTemplateJavaScript())){
	foreach ($oController->getTemplateJavaScript() as $sJs) {
		?><script type="text/javascript" src="/js/<?php echo $sJs;?>.js"></script> <?php
	}
}?>
</head>
<div id="wrap">
<div id="header">
	 <?php $headers = array("Welcome", "Demographics", "KIT graphics", "Performance Task", "Questionnaire", "Done");
foreach ($headers as $nav) {
		if($nav == $headers[0]){
			echo '<li class="active" display="inline">'.$nav.'</li>'."\n";
		} else {
			echo '<li class="notactive" display ="inline">'.$nav.'</li>'."\n";
		}
	}?>
	</div>
	<div id="content">
        
	<?php
	include('Layout/Template/index.php');
	?>
</div>
<div id="footer">
<h1>&nbsp;</h1>
</div>
</div>
</body>
</html>