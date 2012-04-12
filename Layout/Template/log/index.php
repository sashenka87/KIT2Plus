<h1>Subjects log</h1>
<?php foreach ($oSubj as $Subj) {

	echo html::link('log','log',$Subj->getId(),array('qs'=>'SubjId='.$Subj->getId()));
	if($Subj->get('note')){
		echo '<br />-- '.$Subj->get('note');
	}
	echo '<br />';
	

}?>