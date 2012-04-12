wpniSite='nwswk';
wpniDomain='newsweek.com';
show_doubleclick_ad = true;
rssString = "from=rss";
tileThatGetsDcopt = 1;

wpniAds.templates.initRule('defaultTemplate');
wpniAds.templates.rules.defaultTemplate.what = new Array('!bigboxAJAX','!88x31','!leaderboard_2');

/*wpniAds.templates.initRule('noBottomLB');
wpniAds.templates.rules.noBottomLB.what =  new Array('!leaderboard_2');
wpniAds.templates.rules.noBottomLB.where = new Array('health/healthforlife');*/

wpniAds.templates.initRule('allianz');
wpniAds.templates.rules.allianz.what = new Array('!234x60','!bigbox_2','!leaderboard_2','!88x31');
wpniAds.templates.rules.allianz.where = new Array('intl/turningpoints');
wpniAds.templates.rules.allianz.when = new Array('200805010000/200901010000');

wpniAds.templates.initRule('trendMicro');
wpniAds.templates.rules.trendMicro.what = new Array('leaderboard');
wpniAds.templates.rules.trendMicro.where = new Array('techbiz/tech/threatmeter');
wpniAds.templates.rules.trendMicro.when = new Array('200806110000/200812310000');


wpniAds.templates.initRule('noBB2orBB3');
wpniAds.templates.rules.noBB2orBB3.what = new Array('!bigbox_2','!bigbox_3');
wpniAds.templates.rules.noBB2orBB3.where = new Array('culture/entertainment/ansen','tipsheet/giftguide','culture/entertainment/holidaymovie','techbiz/gross','tipsheet/money/moneyguide','health/healthforlife','culture/holidayguide','culture/religion','tipsheet/environment','techbiz/levy/campaign','politics/fineman','techbiz/leadership/women','health/toyourhealth','health/herbody','culture/boomers','culture/whosnext','techbiz/environment');

wpniAds.templates.initRule('airForce');
wpniAds.templates.rules.airForce.what = new Array('!468x60');
wpniAds.templates.rules.airForce.where = new Array('');
wpniAds.templates.rules.airForce.when = new Array('200802252200/200802262359');

wpniAds.templates.initRule('test');
wpniAds.templates.rules.test.what = new Array('88x31');
wpniAds.templates.rules.test.where = new Array('test');
wpniAds.templates.rules.test.when = new Array('200906250000/200912312359');

wpniAds.templates.initRule('toyota');
wpniAds.templates.rules.toyota.what = new Array('88x31');
wpniAds.templates.rules.toyota.where = new Array('module/clunkers');
wpniAds.templates.rules.toyota.when = new Array('200907220000/200908312359');

wpniAds.templates.initRule('rolex_bb');
wpniAds.templates.rules.rolex_bb.what = new Array('!bigbox');
wpniAds.templates.rules.rolex_bb.where = new Array('politics/transitions');
wpniAds.templates.rules.rolex_bb.when = new Array('200811050000/200901312359');



function initAdType(what)
{
	thisAdType = new AdInstance()
	thisAdType.testFlagArray = new Array('test_ads','test_' + what);	
	thisAdType.debugFlagArray = new Array('debugAdCode','debugAdCode_' + what);
	thisAdType.dcCode += atoz() + comment();

	switch(what)
	{
		case '468x60':
			thisAdType.size = '468x60';
			thisAdType.code = 'ad=468x60;';
		break
		
		case '120x60':
			thisAdType.size = '120x60';
			thisAdType.code = 'ad=120x60;';
		break
		
		case 'leaderboard':
			thisAdType.size = "728x90";
			thisAdType.code = "ad=lb;";
		break
		
		case '88x31':
			thisAdType.size = "88x31";
			thisAdType.code = "ad=88x31;";
		
		break;
		
		case '234x60':
			thisAdType.size = "234x60";
			thisAdType.code = "ad=234x60;";
		break;
		
		case '170x113':
			thisAdType.size = "170x113";
			thisAdType.code = "ad=170x113;";
		break;

		case '170x90':
			thisAdType.size = "170x113";
			thisAdType.code = "ad=170x113;";
		break;
		
		case 'bigbox':
			thisAdType.size = "300x250"
			thisAdType.code = "ad=bb;"
		break
		
		case 'articleFlex':
			thisAdType.size = "300x250,336x850,160x600,300x600"
			thisAdType.code = "ad=bb;ad=hp;ad=ss;"
		break
		
		case 'homepageFlex':
			thisAdType.size = "300x250,336x850"
			thisAdType.code = "ad=bb;ad=hp;"
		break

		case 'bigboxHPFlex':
			thisAdType.size = "300x250,336x850"
			thisAdType.code = "ad=bb;ad=hp;"
		break
		
		case 'video':
			
			thisAdType.adServer = 'http://ad.doubleclick.net/pfadx/'
			thisAdType.code = "ad=video"
			thisAdType.adExecute = function (currentLoc,varDcCount,what,flexBoolean)
			{
				if(typeof config == 'undefined')
				{
					config = new Array();
				}
				
				config['adServerURL'] = this.adServer + siteZoneDir(currentLoc) + this.code + ";" + thisAdType.testAction(thisAdType.testFlagArray)
				config['additionalAdTargetingParams'] = ';' + this.dcCode
				adopsDebug("config['adServerURL']=" + config['adServerURL'] + "<br>");
				adopsDebug("config['additionalAdTargetingParams']=" + config['additionalAdTargetingParams'] + "<br>");
			}
			

		break

	}
	
	if (thisAdType.isThisManaged = true)
	{
	thisAdType.managerListLength = getHighestValue(thisAdType.when.length,thisAdType.where.length);
	}
	
	
return thisAdType
}

function front()
{
	if ( ( typeof ad_content_type != 'undefined' && ad_content_type  == 'front' ) || commercialNode && commercialNode == 'homepage')
	{
		return 'front=y;';
	}
	else
	{
		return 'front=n;'
	}
};

function comment()
{
	if ( typeof ad_content_type != 'undefined' && ad_content_type == 'comments' )
	{
		return 'com=y;';
	}
	else
	{
		return '';
	}
}

function atoz()
{
	
	if(typeof conditionID != 'undefined' && (commercialNode.match('atoz') || commercialNode.match('cam')))
	{
		var a = '=' + conditionID + ';'
		if(commercialNode.match('/atoz'))
		{
			return 'atoz' + a;
		}
		if(commercialNode.match('/cam'))
		{
			return 'cam'  + a;
		}
	}
	return '';
}


function hackBin(_arg,currentLoc,what,delivery,onTheFly)
{
	var hackReturnValue=eval(_arg)
	switch(_arg)
	{
		case 'currentLoc':
			hackReturnValue += (commercialNode == 'intl/turningpoints' && (currentLoc == 'printthis' || currentLoc == 'module/quickread'))?'/intl/turningpoints':'';
		break;

	}
	return hackReturnValue
}