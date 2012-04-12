<?php
if($_GET['q']){

	echo '<div class ="scale">0% |</div>';

	for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $_GET['q'];?>', '/scale/definitions.ajax?q=<?php echo $_GET['q'];?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
	}
	echo '<div class ="scale">| 100%</div>';

	echo '</p><br/>';



} else {

?>

<h1>Definitions</h1>

<?php if($oController->getMethod()=='definitions'){?>
<p>
Directions: Write a definition or short description for each word. Please make your definitions as clear as possible so that I know you understand the meaning of the word. If you are unsure of a word's meaning, write your best guess. Please complete each and every word to the best of your ability.<br><br>



Example: <b>Apple</b><br>
<textarea cols="50" rows="2">
An apple is a fruit that has red skin, white flesh, and seeds.
</textarea><br>


Once you have written your best guess for each word, mark each scale to indicate how confident you are in the accuracy of your response.<br>

</p>
<?php } ?>
<form action = "/scale/setdefinitions.php" method="POST">

<?php
$i=1;

foreach ($aQuestions as $question) {
	echo '<input type="hidden" name="available_q[]" value="'.$question.'" />';
	if($i==1){
		echo '<p><b>'.$question.'</b><br />';
		echo '<textarea cols="50" rows="2" name="definition_'.$question.'"></textarea>';
		echo '<div id="'.$i.'">';



		echo '<div class ="scale">0% |</div>';

		for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':(($y==50)?'|':'-');?>
		<div onclick="new Ajax.Updater('<?php echo $i;?>', '/scale/definitions.ajax?q=<?php echo $question;?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale"><?php echo $marker;?></div>
		<?php
		}
		echo '<div class ="scale">| 100%</div>';

		echo '</p><br/>';

		echo '</div>';
	}
	$i++;
}
?>


<p class="error">
Once you are ready <input type="submit" value="click here"> to go to the next page
</p>
</form>

<?php
}
?>

