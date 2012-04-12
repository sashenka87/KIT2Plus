<?php
echo html::link($oController->getController(),'create','nieuw',array('output'=>'void'));
?>
<table>
<?php
$first=true;
foreach($aObjList as $ObjK=>$Obj){

	if($first){
		echo '<tr>';
		foreach ($Obj->getAll() as $k=>$v){
			echo '<td><b>'.$k.'</b></td>';
		}
		echo '</tr>';

		$first=false;
	}
	echo '<tr>';
	foreach ($Obj->getAll() as $k=>$v){
		echo '<td>'.substr(strip_tags($v),0,40).'</td>';
	}
	echo '<td>'. html::link($oController->getController(),'edit','edit',array('output'=>'void','qs'=>'id='.$Obj->getId())).'</td>';
	echo '<td>'. html::link($oController->getController(),'delete','delete',array('output'=>'void','qs'=>'id='.$Obj->getId(),'onclick' => 'return confirm(\'Weet je zeker dat je dit wilt verwijderen ?\');')).'</td>';
	echo '</tr>';

}
?>
</table>