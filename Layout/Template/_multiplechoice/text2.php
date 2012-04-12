<h1>Passage comprehension questions</h1>
<?php if($error){
	?><p class="error">Not all questions are awnsered. Please fill in the missing values</p><?php
}?>
<form action="/multiplechoice/setawnsertext2.php" method="POST">
<?php 
$i=1;
foreach ($q as $qkey=>$qval) {

	echo '<p><b>'.$i.'. </b>'.$qval.' <br />';
	$y=1;
	foreach ($a[$qkey] as $aval) {
		$selected=($_POST[$i]==$y)?'checked="checked"':false;
		echo  '<input '.$selected.' type="radio" name="'.$i.'" value="'.$y.'">'.$aval.'<br/>';
		$y++;
	}
	echo '</p>';
	$i++;


}

if(sizeof($qe)){

	$z=9;
	foreach ($qe as $qkey=>$qval) {
 
		echo '<p><b>'.$z.'. </b>'.$qval.' <br />';
		$y=1;
		foreach ($ae[$qkey] as $aval) {
			$selected=($_POST['e'.$z]==$y)?'checked="checked"':false;
			echo  '<input '.$selected.' type="radio" name="e'.$z.'" value="'.$y.'">'.$aval.'<br/>';
			$y++;
		}
		echo '</p>';
		$z++;
	}

}



foreach ($o as $qkey=>$qval) {

	echo '<p><b>'.$i.'. </b>'.$qval.' <br />';

	echo  '<textarea rows="5" cols="55"name="'.$i.'">'.$_POST[$i].'</textarea><br/>';

	echo '</p>';
	$i++;


}



?>
<input type="submit" value="done">
</form>