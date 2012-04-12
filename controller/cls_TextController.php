<?php class text extends Controller {

	public function kitgraphicsintroduction(){

	}

	public function kitgraphics(){

	}

	public function kitperformanceintroduction(){

	}

	public function library(){
		if($_GET['LibId']){
			$this->setTemplateName('library/'.$_GET['LibId'].'.php');
		} else {
			$this->setTemplateName('library/index.php');
		}
	}

	public function question1(){
		$this->setTemplateJavaScript('prototype');
	}

	public function question2(){
		$this->setTemplateJavaScript('prototype');
	}

}
?>