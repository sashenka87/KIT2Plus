<?php
if($_GET['q']){

	echo '<p><b>'.$aQuestions.'</b><br />';


	if($_GET['q']>2){
		for($i=0;$i<=3;$i++){
			echo ' - '.$aAwnsers[$i].'<br />';
		}
		echo '<br />How confident are you in the accuracy of your response?<br />';
		echo '<div class ="scale">0% |</div>';

		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $_GET['q'];?>', '/scale/q1.ajax?q=<?php echo $_GET['q'];?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
		}
		echo '<div class ="scale">| 100%</div>';
	} else if($_GET['q']==1) {
		echo '<div class ="scale">not well |</div>';
		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $_GET['q'];?>', '/scale/q1.ajax?q=<?php echo $_GET['q'];?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
				<?php
		}
		echo '<div class ="scale">| very well</div>';

	} else {
		echo '<div class ="scale">not interested |</div>';
		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $_GET['q'];?>', '/scale/q1.ajax?q=<?php echo $_GET['q'];?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
		}
		echo '<div class ="scale">| very interested</div>';
	}


	echo '</p><br/>';



} else {

?>

<h1>Global Judgment of Learning</h1>



<?php
$i=1;

foreach ($aQuestions as $question) {


	echo '<div id="'.$i.'">';

	echo '<p><b>'.$question.'</b><br />';
	if($i>2){
		for($y=0;$y<=3;$y++){
			echo ' - '.$aAwnsers[$i][$y].'<br />';
		}
		echo '<br />How confident are you in the accuracy of your response?<br />';
		echo '<div class ="scale">0% |</div>';

		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $i;?>', '/scale/q1.ajax?q=<?php echo $i;?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
		}
		echo '<div class ="scale">| 100%</div>';
	} else if($i==1) {
		echo '<div class ="scale">not well |</div>';

		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $i;?>', '/scale/q1.ajax?q=<?php echo $i;?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
		}
		echo '<div class ="scale">| very well</div>';
	} else {

		echo '<div class ="scale">not interested |</div>';

		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $i;?>', '/scale/q1.ajax?q=<?php echo $i;?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
		}
		echo '<div class ="scale">| very interested</div>';

	}


	echo '</p><br/>';

	echo '</div>';

	$i++;
}
?>
<p class="error">
Once you are ready <?php echo html::link('navigation','next','click here');?> to go to the next page
</p>


<?php
}
?>

