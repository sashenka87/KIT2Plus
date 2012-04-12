<?php

class Start extends Controller{

	public function index(){
		$oList = new ModelList();
		$oSubj= $oList->getList('Subjects',array(),'SubjectId DESC LIMIT 1');
		$this->setTemplate('oSubj',$oSubj[0]);
	}


	public function setstart(){



		$oSubj =  new Subjects();
		$oSubj->set('Subjectnumber',$_REQUEST['Subjectnumber']);
		$oSubj->set('note',$_REQUEST['note']);
		$oSubj->save();

		$_SESSION['UserId'] = $oSubj->getId();

		html::restart('demographics');
	}
	
	public function done(){
		session_destroy();
		unset($_SESSION);
	}


}
?>