<h1>Topic Knowledge Questions</h1>
<?php if($error){
	?><p class="error">Not all questions are awnsered. Please fill in the missing values</p><?php
}?>
<form action="/multiplechoice/setawnser.php" method="POST">
<?php 
$i=1;
foreach ($q as $qkey=>$qval) {

	echo '<p><b>'.$i.'. </b>'.$qval.' <br />';
	$y=1;
	foreach ($a[$qkey] as $aval) {
		
		$selected=($_POST[$i]==$y)?'checked="checked"':false;

		echo  '<input type="radio" '.$selected.' name="'.$i.'" value="'.$y.'">'.$aval.'<br/>';
		$y++;
	}
	echo '</p>';
	$i++;
	

}?>
<input type="submit" value="done">
</form>