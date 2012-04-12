<h1>Start the experiment</h1>
<form action="/start/setstart.php" method="POST">
<input type="hidden" name="sessionnostart" value="true">
<h2>Subject Id</h2>
<input name="Subjectnumber" type="text" value="<?php echo ($oSubj->get('SubjectId')+1);?>">
<h2>Note(s)</h2>
<textarea cols="55" rows="5" name="note"></textarea>
<br />
<input type="submit" value="start the experiment">
</form>