<?php
if($_GET['q']){

	echo '<p><b>'.$aQuestions.'</b><br />';

	echo '<div class ="scale">0% |</div>';

	for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $_GET['q'];?>', '/scale/ss.ajax?q=<?php echo $_GET['q'];?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
	}
	echo '<div class ="scale">| 100%</div>';

	echo '</p><br/>';



} else {

?>
<?php if($_SESSION['UserId'] % 4 == 3){?>
<h1>Directions</h1>
<div>
<p>Directions: Please rate how well you feel you understood aspects of the passage you just read. For example, if you are 85% sure you have understood the passage, mark the scale as follows:<br />
<div class ="scale">0% |</div>
<?php 
for ($y=1;$y<=100;$y++){
		$marker = ($y==85)?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div class="scale"><?php echo $marker;?></div>
	<?php } ?>
<div class ="scale">| 100%</div>
</p><br /><br /><br /></div>

<?php } ?>

<h1>ss Questions</h1>

<?php
$i=1;

foreach ($aQuestions as $question) {

	echo '<div id="'.$i.'">';

	echo '<p><b>'.$question.'</b><br />';

	echo '<div class ="scale">0% |</div>';

	for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $i;?>', '/scale/ss.ajax?q=<?php echo $i;?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
	}
	echo '<div class ="scale">| 100%</div>';

	echo '</p><br/>';

	echo '</div>';

	$i++;
}
?>
<form action = "/scale/setss.php" method="POST">
<p><b>Summarize the main idea of the passage in one or two sentences. </p></b>
<textarea cols="50" rows="5" name="summary"></textarea>

<p class="error">
Once you are ready <input type="submit" value="click here"> to go to the next page
</p>
</form>

<?php
}
?>

