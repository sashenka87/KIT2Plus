<form action='./index.php' method='post'>

<input
	type='hidden'
	name='postback'
	value='KI Image Reflection.php' />

<h2>Part B:</h2>

<div class='image-preview'>
<img src=<?php echo "'".$_SESSION['ki-picture']."'"; ?> alt="" height="200px" />
</div>

<div class='form-element'>
<div class='prompt'>Please explain why the graphic representation you chose <span class='direction-word'>best</span> represents the relation between <span class='emphasize-word'>knowledge</span> and <span class='emphasize-word'>information</span>.</div>

<textarea
	name='ki-image-reflection'
	class='reflection'
	>
</textarea>
</div>

<input
	type='submit'
	value='Continue' />

</form>