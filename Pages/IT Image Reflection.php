<form action='./index.php' method='post'>

<input
	type='hidden'
	name='postback'
	value='IT Image Reflection.php' />

<h2>Part F:</h2>

<div class='image-preview'>
	<img src=<?php echo "'".$_SESSION['it-picture']."'"; ?> alt="" height="200px" />
</div>

<div class='form-element'>
<div class='prompt'>Please explain why the graphic representation you chose <span class='direction-word'>best</span> represents the relation between <span class='emphasize-word'>information</span> and <span class='emphasize-word'>truth</span>.</div>

<textarea
	name='it-image-reflection'
	class='reflection'>
</textarea>
</div>

<input
	type='submit'
	value='Continue' />

</form>