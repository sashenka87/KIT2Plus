<?php

class dpages extends Model{
	protected $PK='PageId';
	protected $_sTableName='dpages';
}

class dactions extends Model{
	protected $PK='ActionId';
	protected $_sTableName='dactions';
}

class dsubjects extends Model{
	protected $PK='SubjectId';
	protected $_sTableName='dsubjects';
}

class logdan extends Controller {

	public function index(){
		$oList = new ModelList();
		$oSubj= $oList->getList('dsubjects',array());
		$this->setTemplate('oSubj',$oSubj);
	}

	public function log(){
		$oLog = new Modellist();
		$oLogList = $oLog->getList('dpages',array('session'=>$_GET['SubjId']));
		$this->setTemplate('oLogList',$oLogList);
		$this->setTemplate('UserId',$_GET['SubjId']);
	}


	public function export(){
		$oList = new ModelList();
		$odsubjects= $oList->getList('dsubjects',array());
echo '<pre>';
		foreach ($odsubjects as $oSubj){
			echo $oSubj->getId()."\t";

			// DEMOGRAPHICS
			$oPage = new dpages();
			$oPage->getLastData('*',array('uri'=>'/demographics/setdemographics.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array('gender','age','ethnicity','ethnicity-other','major','cum-col-credits','gpa');

			foreach ($aKeys as $key) {
				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
echo $oAction->get('value')."\t";
			}

			// TOPIC KNOWLEDGE
			$oPage = new dpages();
			$oPage->getLastData('*',array('uri'=>'/multiplechoice/setawnser.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);

			foreach ($aKeys as $key) {
				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
echo $oAction->get('value')."\t";
			}

			// TOPIC INTEREST
			$aArray = array(1,2,3,4,5,6,7,8,9,10);

			foreach ($aArray as $val) {
				$oPage = new dpages();
				$oPage->getLastData('*',array('uri'=>'/scale/topicinterest.ajax?q='.$val,'session'=>$oSubj->get('Subjectnumber')),'like');

				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>'Question'.$val));
echo $oAction->get('value')."\t";
			}

			// MC text 1
			$oPage = new dpages();
			$oPage->getLastData('*',array('uri'=>'/multiplechoice/setawnsertext1.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array(1,2,3,4,5,6,7,8,9,10,11,'e9','e10','e11');

			foreach ($aKeys as $key) {
				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
echo $oAction->get('value')."\t";
			}

			// SLIED TEXT 1
			$aArray = array(1,2,3,4,5,6,7,8,9,10);

			foreach ($aArray as $val) {
				$oPage = new dpages();
				$oPage->getLastData('*',array('uri'=>'/scale/q1.ajax?q='.$val,'session'=>$oSubj->get('Subjectnumber')),'like');

				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>'Question'.$val));
echo $oAction->get('value')."\t";
			}
			
			
			// MC text 2 
			$oPage = new dpages();
			$oPage->getLastData('*',array('uri'=>'/multiplechoice/setawnsertext2.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array(1,2,3,4,5,6,7,8,9,10,11,'e9','e10','e11');

			foreach ($aKeys as $key) {
				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
echo $oAction->get('value')."\t";
			}

			// SLIED TEXT 2
			$aArray = array(1,2,3,4,5,6,7,8,9,10);

			foreach ($aArray as $val) {
				$oPage = new dpages();
				$oPage->getLastData('*',array('uri'=>'/scale/q2.ajax?q='.$val,'session'=>$oSubj->get('Subjectnumber')),'like');

				$oAction = new dactions();
				$oAction->getLastData('*',array('PageId'=>$oPage->getId(),'key'=>'Question'.$val));
echo $oAction->get('value')."\t";
			}



			echo '<br />'."\n";
		}
		exit;
		$this->setTemplate('oPage',$oPage);
	}
}
?>