<form action='./index.php' method='post'>

<input
	type='hidden'
	name='postback'
	value='IT Image Selection.php' />
<input
	type='hidden'
	name='it-picture'
	id='picture-data'
	value='' />
<input
	type='hidden'
	id='canvas-colors'
	value='Information,blue,Truth,green' />
	
<h2>Part E:</h2>

<div class='form-element'>
	<div class='prompt'>
	<p>How would you represent the relation between <span class='emphasize-word'>information</span> and <span class='emphasize-word'>truth</span>?</p>

	<p alt="Please draw your own representation of the relation in the space provided, or <a href='#' onclick='toggleCanvas(this)'>click here to return to the selection screen</a>.">Please click on the graphic that best illustrates your view or <a href="#" onclick="toggleCanvas(this)">click here to draw your own</a>.</p>
	</div>
	
	<div id='image-selection'>
	
	<?php
		$path = './KIT Pics/IT Pics/';
		echo "\n";
		for ($i = 0; $i < 7; $i++)
		{
			echo "<img src='".$path.$i.".jpg' alt='$i' class='unselected-kit-circle' onclick=\"selectCircle(this)\" />\n";
		}
	?>
	
	<div class='float-break'></div>
		
	</div>
	
	<div id='kit-canvas-div'></div>
</div>

<input
	type='submit'
	value='Continue' />

</form>