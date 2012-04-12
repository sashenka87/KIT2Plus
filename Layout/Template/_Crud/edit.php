<div id="crudmsg">
<p><?php
echo html::link($oController->getController(),'index','terug',array('output'=>'void'));
?> </p>
</div>

<form action="/<?php echo $oController->getController(); ?>/setedit.void" method="post">
<input type="hidden" name="id" value="<?php echo $oData->getId();?>" />
<table>
<?php
foreach($aFields as $k=>$v){

	echo '<tr><td>'.html::fieldtotext($v).'</td><td>'.html::fieldtoinput($v,$aData[$v['Field']]).'</td></tr>'."\n";

}
?>
<tr><td colspan="2"><input type="submit" class="button" value="wijzigen" /></td></tr>
</table>

</form>