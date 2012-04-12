<link rel="stylesheet" type="text/css" href="./css.css" media="screen" />
<style type="text/css">
   .drag {background-color: transparent; position: absolute; opacity: .65; cursor: move; display: inline}

</style>
<div id="wrap">
<div id="header">
   <?php $headers = array("Welcome", "Demographics", "KIT graphics", "Performance Task", "Questionnaire", "Done");
foreach ($headers as $nav) {
		if($nav == $headers[2]){
			echo '<li class="active" display="inline">'.$nav.'</li>'."\n";
		} else {
			echo '<li class="notactive" display ="inline">'.$nav.'</li>'."\n";
		}
	}?>
	</div>
	<div id="content">
<h8><p>DIRECTIONS: We are interested in how you think knowledge (K), information (I), and truth (T) are related. </p>
<p>Drag <b>one</b> of each of the circles marked K, I, and T from the shape bank into the box to the right and create a representation of this relation. </p>
<p>You may choose any of the available sizes and position them in any way, using all the time you need for this task. </p></h8>

<form method="POST" action=<?php echo '"./setpicture.php?a='.$_GET['a'].'"'; ?>>

<table border="0" width="100%">
<tr>

<td width="50%" valign="top">
<div id="shapes">
<table> 
<td>
<tr style="border:solid" >
<img class="drag" width="40" height="40" src="images/ks.png" id="ks" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img class="drag" width="80" height="80" src="images/km.png" id="km" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img class="drag" width="120" height="120" src="images/kl.png" id="kl"/> &nbsp;
<br/><br/><br/><br/><br/>
</tr>
<tr style="border:solid">
<img class="drag" width="40" height="40" src="images/is.png" id="is" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img class="drag" width="80" height="80" src="images/im.png" id="im" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img class="drag" width="120" height="120" src="images/il.png" id="il" />
<br/><br/><br/><br/><br/>
</tr>
<tr style="border:solid">
<img class="drag" width="40" height="40" src="images/ts.png" id="ts" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img class="drag" width="80" height="80" src="images/tm.png" id="tm" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img class="drag" width="120" height="120" src="images/tl.png" id="tl" />
<br/><br/>
<p><input type="submit" value="Finish"></p>
</tr>
</td>

</table>
</td>

<td width="50%" id="box" k="(0,0)" i="(0,0)" t="(0,0)" valign="top" style="border:solid">
&nbsp;
</td>

</tr>
</table>
<input type="hidden" id="ktype" name="ktype" value="n">
<input type="hidden" id="ktop" name="ktop" value="0">
<input type="hidden" id="kleft" name="kleft" value="0">
<input type="hidden" id="itype" name="itype" value="n">
<input type="hidden" id="itop" name="itop" value="0">
<input type="hidden" id="ileft" name="ileft" value="0">
<input type="hidden" id="ttype" name="ttype" value="n">
<input type="hidden" id="ttop" name="ttop" value="0">
<input type="hidden" id="tleft" name="tleft" value="0">
</body>
<script type="text/javascript" src = "different/drag.js">
</script>
</form>
</div>