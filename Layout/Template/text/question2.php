<div id="question" style="margin:4px; padding: 4px; border: blue 3px solid;height:27%;overflow:auto;">
   <form method="POST" action=<?php echo './setquestion2.php?a='. $_GET['a']; ?>>
<input type="hidden" id="times" name= "times" value="Started">
<h3>Q2: How important is government-supported childcare as a factor in high fertility rates?  </h3>
<textarea name="answer" style="width:100%"></textarea>
<input type="submit" value="Submit">
</form>
</div>

<div id="lib" style="height:66%;padding: 4px;overflow:auto;">
   <?php include('library.htm'); ?>
</div>

<input onclick="updateTo('lib', 'library.htm')" value="Back to Library" type="submit">