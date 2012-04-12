<?php
class Demographics extends Controller{

	public function setdemographics(){

		$bContinue=true;

		$sPageId = $this->getPageLog()->getId();

		$aSave=array('gender','age','ethnicity','ethnicity-other','major','cum-col-credits','gpa','natengspeaker');

		$aObl=array('gender','age','ethnicity','major','cum-col-credits','gpa','natengspeaker');

		foreach ($aObl as $var) {
			if(empty($_POST[$var])){
				$bContinue=false;
			}
		}

		if($bContinue){

			foreach ($aSave as $sSave) {
				$Actions[$sSave] = new Actions();
				$Actions[$sSave]->set('PageID',$sPageId);
				$Actions[$sSave]->set('key',$sSave);
				$Actions[$sSave]->set('value',$_POST[$sSave]);
				$Actions[$sSave]->save();
			}


			html::restart('navigation','next');

		} else {

			$this->setTemplate('error',true);
			$this->setTemplateName('/demographics/index.php');
		
		}


	}

}
?>