<?php class log extends Controller {

	public function index(){
		$oList = new ModelList();
		$oSubj= $oList->getList('Subjects',array());
		$this->setTemplate('oSubj',$oSubj);
	}

	public function log(){
		$oLog = new Modellist();
		$oLogList = $oLog->getList('Pages',array('session'=>$_GET['SubjId']));
		$this->setTemplate('oLogList',$oLogList);
		$this->setTemplate('UserId',$_GET['SubjId']);
	}


	public function export(){
		$oList = new ModelList();
		$oSubjects= $oList->getList('Subjects',array());

		foreach ($oSubjects as $oSubj){
			echo $oSubj->getId().',';

			// DEMOGRAPHICS
			$oPage = new Pages();
			$oPage->getData('*',array('uri'=>'/demographics/setdemographics.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array('gender','age','ethnicity','ethnicity-other','major','cum-col-credits','gpa');

			foreach ($aKeys as $key) {
				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
				echo '"'.$oAction->get('value').'",';
			}

			// TOPIC KNOWLEDGE
			$oPage = new Pages();
			$oPage->getData('*',array('uri'=>'/multiplechoice/setawnser.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);

			foreach ($aKeys as $key) {
				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
				echo '"'.$oAction->get('value').'",';
			}

			// TOPIC INTEREST
			$aArray = array(1,2,3,4,5,6,7,8,9,10);

			foreach ($aArray as $val) {
				$oPage = new Pages();
				$oPage->getData('*',array('uri'=>'/scale/topicinterest.ajax?q='.$val,'session'=>$oSubj->get('Subjectnumber')),'like');

				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>'Question'.$val));
				echo '"'.$oAction->get('value').'",';
			}

			// MC text 1
			$oPage = new Pages();
			$oPage->getData('*',array('uri'=>'/multiplechoice/setawnsertext1.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array(1,2,3,4,5,6,7,8,9,10,11,'e9','e10','e11');

			foreach ($aKeys as $key) {
				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
				echo '"'.$oAction->get('value').'",';
			}

			// SLIED TEXT 1
			$aArray = array(1,2,3,4,5,6,7,8,9,10);

			foreach ($aArray as $val) {
				$oPage = new Pages();
				$oPage->getData('*',array('uri'=>'/scale/q1.ajax?q='.$val,'session'=>$oSubj->get('Subjectnumber')),'like');

				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>'Question'.$val));
				echo '"'.$oAction->get('value').'",';
			}
			
			
			// MC text 2 
			$oPage = new Pages();
			$oPage->getData('*',array('uri'=>'/multiplechoice/setawnsertext2.php','session'=>$oSubj->get('Subjectnumber')));

			$aKeys = array(1,2,3,4,5,6,7,8,9,10,11,'e9','e10','e11');

			foreach ($aKeys as $key) {
				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>$key));
				echo '"'.$oAction->get('value').'",';
			}

			// SLIED TEXT 2
			$aArray = array(1,2,3,4,5,6,7,8,9,10);

			foreach ($aArray as $val) {
				$oPage = new Pages();
				$oPage->getData('*',array('uri'=>'/scale/q2.ajax?q='.$val,'session'=>$oSubj->get('Subjectnumber')),'like');

				$oAction = new Actions();
				$oAction->getData('*',array('PageId'=>$oPage->getId(),'key'=>'Question'.$val));
				echo '"'.$oAction->get('value').'",';
			}



			echo '<br />';
		}
		exit;
		$this->setTemplate('oPage',$oPage);
	}
}
?>