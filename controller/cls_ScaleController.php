<?php

class scale extends Controller {

	public function scale1(){
		$this->setTemplateJavaScript('prototype');

		$aQuestions =array(

		1=>'The point of gathering facts is so that I can make up my own mind.',
		2=>'I question much of what I read online. ',
		3=>'Given enough effort, I can find the answer to any question.',
		4=>'I do not like answers that begin with "it depends."',
		5=>'It is more useful to consider what regular people think than what experts think.',
		6=>'The best authority on an event is someone who is directly witnessing it.',
		7=>'There is a real difference in the quality of content online and in print.',
		8=>'I do not worry about remembering what I read online.',
		9=>'The best sources are the most current sources.',
		10=>'It should only take a few steps to locate a good answer to any question.',
		11=>'I question much of what I read in books.',
		12=>'Before I use content from a particular source, I consider the trustworthiness of the source.',
		13=>'I enjoy investigating questions that require consideration of multiple aspects.',
		14=>'I find it easy to tell whether what I am reading is accurate.',
		15=>'When reading, it is always important to consider the author\'s purpose.',
		16=>'I do not need to try to remember any content, as long as I know where to find it again.',
		17=>'Getting answers is just a matter of accessing the right sources.',
		18=>'In forming my opinion, it is my responsibility to evaluate whether an author\'s arguments are well grounded in evidence.',
		19=>'I dismiss sources that do not immediately answer my question.',
		20=>'Long explanations are less useful to me than just the facts.',
		21=>'When looking for answers to my questions, I rarely use books.',
		22=>'I usually evaluate the accuracy of the facts presented in what I read.',
		23=>'I skip over a source if it takes too long to read.',
		24=>'I prefer a straight "yes" or "no" answer to a question.',
		25=>'If most people agree on something, it is probably true.',
		26=>'In general, I find it easy to tell whether a source is likely to be useful.',
		27=>'Most of the time, I can find what I need in one source.',
		28=>'I often get more from what I read than what I was originally expecting to learn.',
		29=>'I usually ignore a source that looks hard to read.',
		30=>'My familiarity with a topic affects how I look for answers.',
		31=>'Using someone else\'s words or ideas is not a big deal.',
		32=>'It is a good idea to put in some effort to evaluate what you are reading.',
		33=>'If I cannot find answers online, I do not usually search anywhere else.',
		34=>'I do not worry about remembering what I read in books.',
		35=>'I like being able to access a lot of material on any topic.',
		36=>'How interested I am in a topic affects how I evaluate what I read.',
		37=>'I enjoy encountering new ideas when I read.',
		38=>'I find that the most useful sources are usually the easiest to locate.',
		39=>'If I do not find answers quickly, I stop searching.',
		40=>'Anything you need to find can be found online.',
		41=>'It is my responsibility to make sure that what I read is accurate before using it.',

		);

		if($_GET['q']){
			$this->setTemplate('aQuestions',$aQuestions[$_GET['q']]);

			$sPageId = $this->getPageLog()->getId();

			$Actions = new Actions();
			$Actions->set('PageID',$sPageId);
			$Actions->set('key','Question'.$_GET['q']);
			$Actions->set('value',$_GET['a']);
			$Actions->save();

			$_SESSION['topicinterest'][$_GET['q']]=true;


		} else {
			$this->setTemplate('aQuestions',$aQuestions);
		}

	}


	public function scale2(){
		$this->setTemplateJavaScript('prototype');

		$aQuestions =array(

		1=>'I dismiss sources that do not immediately answer my question.',
		2=>'My familiarity with a topic affects how I look for answers.',
		3=>'If I cannot find answers online, I do not usually search anywhere else.',
		4=>'I do not like answers that begin with "it depends."',
		5=>'It is more useful to consider what regular people think than what experts think.',
		6=>'I find it easy to tell whether what I am reading is accurate.',
		7=>'Getting answers is just a matter of accessing the right sources.',
		8=>'I do not worry about remembering what I read online.',
		9=>'The best sources are the most current sources.',
		10=>'It should only take a few steps to locate a good answer to any question.',
		11=>'I enjoy investigating questions that require consideration of multiple aspects.',
		12=>'Before I use content from a particular source, I consider the trustworthiness of the source.',
		13=>'I find that the most useful sources are usually the easiest to locate.',
		14=>'The best authority on an event is someone who is directly witnessing it.',
		15=>'I skip over a source if it takes too long to read.',
		16=>'I do not need to try to remember any content, as long as I know where to find it again.',
		17=>'There is a real difference in the quality of content online and in print.',
		18=>'In forming my opinion, it is my responsibility to evaluate whether an author\'s arguments are well grounded in evidence.',
		19=>'I usually ignore a source that looks hard to read.',
		20=>'Long explanations are less useful to me than just the facts.',
		21=>'When looking for answers to my questions, I rarely use books.',
		22=>'I usually evaluate the accuracy of the facts presented in what I read.',
		23=>'When reading, it is always important to consider the author\'s purpose.',
		24=>'I prefer a straight "yes" or "no" answer to a question.',
		25=>'If most people agree on something, it is probably true.',
		26=>'In general, I find it easy to tell whether a source is likely to be useful.',
		27=>'Most of the time, I can find what I need in one source.',
		28=>'I often get more from what I read than what I was originally expecting to learn.',
		29=>'The point of gathering facts is so that I can make up my own mind.',
		30=>'I question much of what I read online.',
		31=>'Using someone else\'s words or ideas is not a big deal.',
		32=>'It is a good idea to put in some effort to evaluate what you are reading.',
		33=>'Given enough effort, I can find the answer to any question.',
		34=>'I do not worry about remembering what I read in books.',
		35=>'I like being able to access a lot of material on any topic.',
		36=>'How interested I am in a topic affects how I evaluate what I read.',
		37=>'I enjoy encountering new ideas when I read.',
		38=>'I question much of what I read in books.',
		39=>'If I do not find answers quickly, I stop searching.',
		40=>'Anything you need to find can be found online.',
		41=>'It is my responsibility to make sure that what I read is accurate.',

		);

		if($_GET['q']){
			$this->setTemplate('aQuestions',$aQuestions[$_GET['q']]);

			$sPageId = $this->getPageLog()->getId();

			$Actions = new Actions();
			$Actions->set('PageID',$sPageId);
			$Actions->set('key','Question'.$_GET['q']);
			$Actions->set('value',$_GET['a']);
			$Actions->save();

			$_SESSION['topicinterest'][$_GET['q']]=true;


		} else {
			$this->setTemplate('aQuestions',$aQuestions);
		}

	}

	public function setscale1(){

		$sPageId = $this->getPageLog()->getId();

		$Actions[$sSave] = new Actions();
		$Actions[$sSave]->set('PageID',$sPageId);
		$Actions[$sSave]->set('key','summary');
		$Actions[$sSave]->set('value',$_POST['summary']);
		$Actions[$sSave]->save();

		html::restart('navigation','next');
	}




}
?>