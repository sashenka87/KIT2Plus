<?php
echo html::link($oController->getController(),'index','terug',array('output'=>'void'));
?>

<form action="/<?php echo $oController->getController(); ?>/setnew.void" method="post">
<table>
<?php
$first=true;
foreach($aFields as $k=>$v){

	echo '<tr><td>'.html::fieldtotext($v).'</td><td>'.html::fieldtoinput($v,false).'</td></tr>'."\n";

}
?>
<tr><td colspan="2"><input type="submit" class="button" value="wijzigen" /></td></tr>
</table>
</form>