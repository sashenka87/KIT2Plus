<?php
if($_GET['q']){

	echo '<p><b>'.$aQuestions.'</b><br />';

	echo '<div class ="scale" style = "display: inline">SD |</div>';

	for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':'-';?>
		<div onclick="new Ajax.Updater('<?php echo $_GET['q'];?>', '/scale/scale1.ajax?q=<?php echo $_GET['q'];?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale" style = "display: inline"><?php echo $marker;?></div>
		<?php
	}
	echo '<div class ="scale" style = "display: inline"> SA</div>';

	echo '</p><br/>';



} else {

?>

<h1>Directions</h1>
<div>
<p>Please respond to the following 41 statements by making a mark (X) on the line. Indicate how much you agree or disagree with the given statement by drawing your mark closer to the strongly disagree (SD) or the strongly agree (SA) end. For this set of questions, please rate your agreement according to what you think and do when you are engaged in personal activities and tasks.</p>

<p><b>Sample:  When I read, I talk to myself.</b></p>
<div class ="scale" style = "display: inline">SD |</div>
<?php 
for ($y=1;$y<=100;$y++){
		$marker = ($y==85)?'<b style="color:red;">X</b>':'-';?>
		<div class="scale" style = "display: inline"><?php echo $marker;?></div>
	<?php } ?>
<div class ="scale" style = "display: inline">| SA</div>
</p><br /><br /></div>

<h2>For School...</h2>

<?php
$i=1;
$questions = array("The point of gathering facts is so that I can make up my own mind.", "I question much of what I read online.","Given enough effort, I can find the answer to any question.","I do not like answers that begin with 'it depends.'","It is more useful to consider what regular people think than what experts think.","The best authority on an event is someone who is directly witnessing it.","There is a real difference in the quality of content online and in print.","I do not worry about remembering what I read online.","The best sources are the most current sources.","It should only take a few steps to locate a good answer to any question.","I question much of what I read in books.","Before I use content from a particular source, I consider the trustworthiness of the source.","I enjoy investigating questions that require consideration of multiple aspects.","I find it easy to tell whether what I am reading is accurate.","When reading, it is always important to consider the author's purpose.","I do not need to try to remember any content, as long as I know where to find it again.","Getting answers is just a matter of accessing the right sources.","In forming my opinion, it is my responsibility to evaluate whether an author's arguments are well grounded in evidence.", "I dismiss sources that do not immediately answer my question.","Long explanations are less useful to me than just the facts.","When looking for answers to my questions, I rarely use books.","I usually evaluate the accuracy of the facts presented in what I read.","I skip over a source if it takes too long to read.","I prefer a straight 'yes' or 'no' answer to a question.","If most people agree on something, it is probably true.","In general, I find it easy to tell whether a source is likely to be useful.","Most of the time, I can find what I need in one source.","I often get more from what I read than what I was originally expecting to learn.","I usually ignore a source that looks hard to read.","My familiarity with a topic affects how I look for answers.","Using someone else's words or ideas is not a big deal.","It is a good idea to put in some effort to evaluate what you are reading.","If I cannot find answers online, I do not usually search anywhere else.","I do not worry about remembering what I read in books.", "I like being able to access a lot of material on any topic.", "How interested I am in a topic affects how I evaluate what I read.", "I enjoy encountering new ideas when I read.","I find that the most useful sources are usually the easiest to locate.","If I do not find answers quickly, I stop searching.","Anything you need to find can be found online.", "It is my responsibility to make sure that what I read is accurate before using it.");

foreach($questions as $question) {

	echo '<div id="'.$i.'">';

	echo '<p><b>'.$question.'</b><br />';

	echo '<div class ="scale" style = "display: inline">SD |</div>';

	for ($y=1;$y<=100;$y++){
		$marker = ($y==$_GET['a'])?'<b style="color:red;">X</b>':'-';?>
		<div onclick="new Ajax.Updater('<?php echo $i;?>', '/scale/scale1.ajax?q=<?php echo $i;?>&a=<?php echo $y;?>', {asynchronous:true,method:'get'}); return false;" class="scale" style = "display: inline"><?php echo $marker;?></div>
		<?php
	}
	echo '<div class ="scale" style = "display: inline">| SA</div>';

	echo '</p><br/>';

	echo '</div>';

	$i++;
}
?>
<form method="POST" action="../start/done.php">
<p><input type="submit" value="Start"></p>
</form>
<?php
}
?>

