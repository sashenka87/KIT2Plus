<h1>Log for user <?php echo $UserId;?></h1>
<table  border="1" cellpadding="2" cellspacing="0">
<tr>
<td><b>Url</b></td>
<td><b>Time</b></td>
<td><b>TimeDif</b></td>
</tr>

<?php foreach ($oLogList as $oLog) { ?>
<tr>
<td><?php echo $oLog->get('uri');?></td>
<td><?php echo $oLog->get('timestamp');?></td>
<td><?php echo ($oLog->get('timestamp')-$lasttime);?></td>
</tr>

<?php $lasttime =  $oLog->get('timestamp');?>
<?php 
$oAction = new ModelList();
$oActionList = $oAction->getList('Actions',array('PageId'=>$oLog->get('PageId')));
if(sizeof($oActionList)){
	echo '<tr><td colspan="3">';
	foreach ($oActionList as $Action){
		echo '<b style="color:red;margin-left:2em;">'.$Action->get('key').'</b> - '.$Action->get('value').'<br />';
	}
	echo '</td></tr>';
}?>

<?php } ?>
</table>