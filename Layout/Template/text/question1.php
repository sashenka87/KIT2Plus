<div id="question" style="margin:4px; padding: 4px; border: blue 3px solid;height:27%;overflow:auto;">
   <form method="POST" action=<?php echo './setquestion1.php?a='.$_GET['a']; ?>>
<input type="hidden" id="times" name ="times" value="Started">
<h3>Q1: In the USA, what is the replacement fertility rate?  </h3>
<textarea name="answer1" style="width:100%"></textarea>
<input type="submit" value="Submit">

</form>
</div>
<div id="lib" style="padding-left:10px;height:66%;overflow:auto;">
   <?php include('library.htm');?>
</div>

<input onclick="updateTo('lib', 'library.htm')" value="Back to Library" type="submit">