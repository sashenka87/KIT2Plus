<?php class Navigation extends Controller {

	public function collect(){
		$_SESSION['activenav'] = intval($this->getMethod());
		html::restart($this->_aTemplate['aNav'][$_SESSION['activenav']]['controller'],$this->_aTemplate['aNav'][$_SESSION['activenav']]['method']);
	}

	public function next(){
		$_SESSION['activenav'] = ($_SESSION['activenav']+1);
		html::restart($this->_aTemplate['aNav'][$_SESSION['activenav']]['controller'],$this->_aTemplate['aNav'][$_SESSION['activenav']]['method']);
	}


	public function start(){
		$this->_aTemplate['activenav']=0;
		$this->setTemplateName('/navigation/next.php');
	}

	public function end(){
		$this->_aTemplate['activenav']=100;
	}
}
?>