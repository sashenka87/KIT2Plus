function estOffset(dateObj)
{
	var mo = dateObj.getMonth();
	if (mo < 2 || mo > 10) return 300;
	if (mo > 2 && mo < 10) return 240;

	var last_sunday_index =   ( ( dateObj.getDate() - dateObj.getDay() - 1 ) / 7) + 1;

	if(mo==2)
	{
	  return ( last_sunday_index > 2 || (last_sunday_index == 2 && dateObj.getHours() >= 2))?240:300
	}
	else
	{
	 return ( last_sunday_index > 1 || (last_sunday_index == 1 && dateObj.getHours() >= 2))?300:240;
	}
}

var estNow = new Date();
var estNowInMillis = estNow.getTime();
var millisFromEST = (estNow.getTimezoneOffset() - estOffset(estNow)) * 60000;
var estNow = new Date( estNowInMillis + millisFromEST )
estNowWithYear = dateToString(estNow).toString() ;

wpniAds = new Object();

if(typeof wpniSite == 'undefined')
{
	wpniSite = '';
}
if(typeof wpniDomain == 'undefined')
{
	wpniDomain = document.domain.split(".")[1] + "." + document.domain.split(".")[2];
}

wpniAds = new Object();
wpniAds.keyvalues = new Object();
wpniAds.adTypes = new Object();
wpniAds.utils = new Object();

wpniAds.deliveryType = new Object();

wpniAds.templates = new Object();
wpniAds.templates.rules = new Object();
wpniAds.templates.initRule = function (ruleName)
{
	this.rules[ruleName] = new Object();
	this.rules[ruleName].where = new Array('');
	this.rules[ruleName].when = new Array('');
	this.rules[ruleName].what = new Array('');
}

wpniAds.utils.wabs = new Object();
wpniAds.utils.wabs.recalc = function ()
{
	var rootElement = (document.compatMode != 'BackCompat')?document.documentElement:document.body;
	this.bodyheight = rootElement.scrollHeight;
	this.bodywidth = rootElement.scrollWidth;
	this.scrollheight= rootElement.scrollTop;
	this.scrollwidth= rootElement.scrollLeft;
	this.windowheight = rootElement.clientHeight;
	this.windowwidth= rootElement.clientWidth;		
}


function trimAll(sString,toTrim) 
{
	if(typeof sString == 'undefined' || !sString) return '';
	
	while (sString.substring(0,1) == toTrim)
	{
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == toTrim)
	{
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
}

function pageId()
{
	
	var pageIdStringRoot = (typeof pageIdRoot != 'undefined')?pageIdRoot:wpniSite;
	if(typeof this.returnValue=='undefined')
	{
		
		this.pIdReturnValue = location.href.split('?')[0]
		if(this.pIdReturnValue.lastIndexOf('.') > this.pIdReturnValue.lastIndexOf('/'))
		{
			this.pIdReturnValue = this.pIdReturnValue.substring(0,this.pIdReturnValue.lastIndexOf('.'))
		}
				if(this.pIdReturnValue.lastIndexOf('index') > this.pIdReturnValue.lastIndexOf('/') || this.pIdReturnValue.lastIndexOf('default') > this.pIdReturnValue.lastIndexOf('/'))
		{
			this.pIdReturnValue = this.pIdReturnValue.substring(0,this.pIdReturnValue.lastIndexOf('/'))
		}
		//take off domain name and protocol declaration
		this.pIdReturnValue = this.pIdReturnValue.split(document.domain)[1]
		//trim slashes from start and end
		this.pIdReturnValue=trimAll(this.pIdReturnValue,'/')
		this.pIdReturnValue=this.pIdReturnValue.replace(/[\/\.]/gi,'-')
		this.pIdReturnValue=unescape(this.pIdReturnValue)
		
		if(this.pIdReturnValue=='')
		{
			this.pIdReturnValue = pageIdStringRoot
		}
	}
	return 'pageId=' + pageIdStringRoot + '-' + this.pIdReturnValue.replace(/[^a-z0-9_-]/gi,'') + ';'
}
//getCookie function
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

//setcookie function
function setCookie (name, value, expires, path, domain, secure) {
	
	
        cookieString = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
		if(location.href.match('test_cookie'))
		{
			adOpsDebug('<b>domain passed to setCookie:</b> ' +domain + '<br/>');
		}
		document.cookie = cookieString;
}

var adOpsLocalFlag = (getCookie('WPATC') && getCookie('WPATC').match('C=1:'))?true:false;

function adopsDebugToggle()
{
	var toggleButton = document.getElementById('adopsDebugToggle');
	var adopsDebugDiv = document.getElementById('adopsDebugDiv');
	adopsDebugDiv.style.display = (toggleButton.innerHTML == 'Show Data')?'block':'none';
	toggleButton.innerHTML = (toggleButton.innerHTML == 'Show Data')?'Hide Data':'Show Data';
	
}

function adopsDebug(_str)
{
	if(!location.href.match('debugAdCode') && !location.href.match('adopsDebug') ) return;
						   
	if(!document.getElementById('adopsDebugDiv'))
	{
		debugDiv = document.createElement('DIV');
		debugDiv.style.fontSize = '9px';
		debugDiv.style.textAlign = 'left';
		debugDiv.style.fontFamily = 'verdana,arial,helvetica';
		debugDiv.style.padding = "10px";
		debugDiv.style.marginBottom = "10px";
		debugDiv.style.borderBottom = "1px solid #a8a1a1";
		debugDiv.style.backgroundColor= "#e1e1e8";
		debugDiv.innerHTML = "<p style='margin:0px 0px 5px 0px;padding:0px;font-size:14px;color:#272127'>WPNI AdOps Debug Info&nbsp;<a href='javascript:adopsDebugToggle()' style='font-weight:bold;font-size:10px' id='adopsDebugToggle'>Show Data</a></p>"
		debugDivContent = document.createElement('DIV');
		debugDivContent.setAttribute('id','adopsDebugDiv');
		debugDivContent.style.display = "none";
		debugDiv.appendChild(debugDivContent);
		document.body.insertBefore(debugDiv, document.body.firstChild);
	}
	document.getElementById('adopsDebugDiv').innerHTML += _str;
}

//creates debugAdCode box for each ad spot
function debugTextArea(ac,adAddress)
{ 
	
	if(!location.href.match('debugAdCode') && adAddress) return;
	var bgColor = (adAddress)?"FFAA00":"D9CCFF";
	var color = (adAddress)?"770000":"5B24FF";
	var debugLink = '';
    var debugPre = '<div style="position:relative;float:left;z-index:1000000000">';
	if(!adAddress)
	{
		possAdIds = ac.match(/[^\d]\d{7,9}[^\d]/gi)
		if(possAdIds)
		{
			var newPAI = new Array()
			for(var a = 0; a < possAdIds.length; a++)
			{
				var addFlag = true;
				var stripped = possAdIds[a].substring(1,possAdIds[a].length-1);
				
				for(var b = 0; b < newPAI.length; b++)
				{
					if(stripped == newPAI[b])
					{
						addFlag = false;
						break;
					}
				}
				if(addFlag) newPAI.push(stripped)
			}
			debugLink = '<div style="color:#000000;font-weight:bold;text-decoration:none"><em>Possible</em> Ad Ids: ' + ( (newPAI.length > 0)?(newPAI):('<em>NONE</em>') ) + '</div>';
		}
	}
	else
	{
		debugLink = '<div><a style="color:#111177;font-weight:bold;text-decoration:none" target="_blank" href="' + adAddress.replace(/adj/gi,"/adi/") + '">Click Here To See The Ad Call In Its Own Window</a></div>';
	}
	var debug = '<div style="text-align:left;text-transform:none;letter-spacing:normal;line-spacing:normal;padding:8px;position:absolute:top:0px;left:0px;width:300px;background-color:#' + bgColor + ';color:#' + color + ';font-family:verdana;font-size:9px;word-wrap:break-word;text-wrap:unrestricted;overflow:scroll">' + debugLink + textifyCode(ac) + '</div>';
	var debugPost = '</div>'
	
	var debugReturn = debugPre  + debug + debugPost;
	
  if(adAddress)
  {
	document.write(debugReturn)
  }
    return debugReturn;
}

function postLoadDebug()
{
	
	scripts = document.getElementsByTagName('script');
	for(var a=0;a<scripts.length;a++)
	{
		if(scripts[a].innerHTML.match('placeAd') && scripts[a].parentNode.nodeName.toLowerCase() != 'head')
		{
			scripts[a].parentNode.innerHTML += debugTextArea(scripts[a].parentNode.innerHTML,null);
		}
	}
}

function getQSValue( name )
{
  var locString=(arguments[1])?arguments[1]:window.location.href;
//first test to see if the qs variable at all. if not, return null.
  var regex = new RegExp( "[\\?&;]"+name );
  var results = regex.exec( locString );
  if(!results) return null;
//ok, it's there. get the value.

  var regex = new RegExp( "[\\?&;]"+name+"=([^&#]*)" );
  var results = regex.exec( locString );
  return (results==null)?"":results[1]
}


function doubleClickTestCode(testFlagArray)
{
	if(typeof this.dctCodeValue == 'undefined')
	{
		this.dctCodeValue = '';
		var queryResult = getQSValue('test_ads');
	
		if(queryResult != null)
		{
			this.dctCodeValue = 'kw=test_' + ((queryResult!='')?queryResult:'ads') + ';';	
		}
	}
	return this.dctCodeValue
}


//returns true if the user...
function timeScope()
{
 numPop=(typeof numPop == 'undefined')?5:numPop;
 hourScope=(typeof hourScope == 'undefined')?24:hourScope;
 
 var finalNumOfPops = (numPop-1)*2;
 
 var returnValue24 = true;
 if(getCookie('popUpClockCookie'))
 {
  if (parseInt(getCookie('popUpClockCookie')) > finalNumOfPops )
  {
   var returnValue24 = false
  }
  else
  {
   setCookie('popUpClockCookie','' + (parseInt(getCookie('popUpClockCookie')) + 1) + '', cookieExpStringMaker((hourScope * 60 * 60 * 1000),thisDate()), '/', wpniDomain,'')
 
  }
 }
 else
 {
  setCookie('popUpClockCookie','1','' + cookieExpStringMaker((hourScope * 60 * 60 * 1000),thisDate()) + '','/', wpniDomain,'')
 }
 return returnValue24
}
//returns true if the user...
function didntSeePopUpOnPreviousPage()
{
 var returnValuePrev = true;
 if(getCookie('popUpOnPreviousPageCookie')!=null)
 {
   if(getCookie('popUpOnPreviousPageCookie') == 'true')
   {
         var returnValuePrev = false
         setCookie('popUpOnPreviousPageCookie','false','', '/', wpniDomain,'')
        }
      else
        {
         setCookie('popUpOnPreviousPageCookie','true','', '/', wpniDomain,'')
        }
 }
 else
 { 
      setCookie('popUpOnPreviousPageCookie','true','', '/',wpniDomain,'')
 }
 return returnValuePrev
}

//is passed one or more strings and then asks the question...
function isAnyOfTheseInTheUrl()
{
 var returnValue = false;
  for(var x=0;x<arguments.length;x++)
  {
   if(location.href.match(arguments[x]))
   {
    returnValue = true;
   }
  }
 return returnValue
}

//interstitial and popup manager
function interstitial()
{
 if(typeof tileThatGetsDcopt != 'undefined' && !tileThatGetsDcopt)
 {
	return '';
 }
 if(typeof tileThatGetsDcopt == 'undefined')
 {
	tileThatGetsDcopt = 1; 
 }
//interstitial is processed if the returnValue doesn't exist, if we're on the home domain, if no_interstitials isn't in the URL, and this is the right tile number
 if(typeof this.intReturnValue == 'undefined' && !isAnyOfTheseInTheUrl('no_interstitials','digg=1','yahoo=y') && arguments[1] == tileThatGetsDcopt)
 {
  //default is that dcopt=ist should be passed
  this.intReturnValue = "dcopt=ist;";
  //if this is a refresh page or from a google search page, or there are no cookies, skip pops
  if(!isAnyOfTheseInTheUrl('g=1','o=','sid=','reload=true') && document.domain.match(wpniDomain))
  { 
   var a = timeScope();
   var b = didntSeePopUpOnPreviousPage();
   adopsDebug("Interstitial Time Scope: " + a + "<br>" + "Didn't See Pops On Previous Page: " + b + "<br>")
   if(a && b)
   {
    this.intReturnValue += 'ad=pop;';
   }
  }
  return this.intReturnValue;
 } 
 return ''
}

//if revsci array exists, creates revsci keyvalues
function revsci()
{
	if (typeof getCookie != 'undefined' && getCookie('rsi_segs') && typeof this.rsReturnValue == 'undefined')
	{
		var rsinetsegs = getCookie('rsi_segs').split('|');
		this.rsReturnValue = '';
		for(var i=0;i<rsinetsegs.length;i++)
		{
			this.rsReturnValue += "rs="+rsinetsegs[i].replace("J05531_","j")+";"
		}
	}
	return this.rsReturnValue;
}

//generates random number (but not ord string) once for entire page
function randomInt(top)
{
	return Math.floor(Math.random()*top)
}

//generates ord string once for entire page
function ordMaker()
{	
	if (typeof this.ordReturnValue == 'undefined')
	{	
		this.ordReturnValue = "ord=" + randomInt(1000000000000000000);
    } 
	return this.ordReturnValue
}

function ajaxOrdMaker()
{	
	//if this.AJAX is passed as true as an argument overload, also pass back a unique ajax_ord kv with a random number value
	var ajax_ord = '';
	if(arguments[0]=='AJAX')
	{
		ajax_ord = 'ajax_ord=' + randomInt(10000000000) + ';';
	}
	return ajax_ord
}

function maxDim(_obj)
{
	var lcSize = _obj.size.toLowerCase();
	var dimArray = lcSize.split(',');
	var maxWidth = 0;
	var maxHeight = 0;
	for(var a = 0; a< dimArray.length; a++)
	{
		maxWidth = Math.max(dimArray[a].split('x')[0],maxWidth)
		maxHeight = Math.max(dimArray[a].split('x')[1],maxHeight)
	}
	return [maxWidth,maxHeight]
}


//checks for dfpcomp variable. if it exists, return dfpcomp as a keyvalue.
function dfpCompFunc()
{
	if(typeof this.dfpReturnValue == 'undefined' || this.dfpReturnValue == '')
	{	
		if(typeof dfpcomp != 'undefined')
		{	
			this.dfpReturnValue = 'dfpcomp=' + dfpcomp + ";";
		}
		else
		{
			this.dfpReturnValue = '';
		}
	}
	return this.dfpReturnValue;
}


//returns size if it isn't a flex

function wpFlex(size)	
{	
	return 'sz='+size+';'
}





//sets Point of Entry value--once for entire page
function poe()
{
	if(typeof this.poeReturnValue == 'undefined')
	{
		poeString = wpniSite + "_poe";
		this.poeReturnValue = 'poe=no;';
		if (getCookie(poeString) == null || getCookie(poeString) == "false")
		{
			this.poeReturnValue = 'poe=yes;';
			setCookie(poeString,"true","","/","",'')
		}
	}
	return this.poeReturnValue
}

//sets rss-user values--once for entire page
function rss()
{ 
 if(typeof rssString == 'undefined') return '';
 if (typeof this.rssReturnValue == 'undefined')
 {
  if (location.href.indexOf(rssString) != -1)
  {
   this.rssReturnValue="fromrss=y;";
   setCookie('rss_now','true','','/',wpniDomain,'');
   setCookie('rss','true',''+cookieExpStringMaker((28 * 24 * 60 * 60 * 1000),thisDate())+'','/',wpniDomain,'');
  }
  else
  {
   this.rssReturnValue="fromrss=n;";
   setCookie('rss_now','false',''+cookieExpStringMaker((28 * 24 * 60 * 60 * 1000),thisDate())+'','/',wpniDomain,'');
  }
  if (getCookie('rss') != null) 
  {
   this.rssReturnValue+='rss=y;'
  }
  else 
  {
   this.rssReturnValue += 'rss=n;'
  }
 }
 
 return this.rssReturnValue
}

//figures out if this user came from a link (not heavy) or opened a window with this (heavy)
function heavy()
{
	if (typeof this.heavyReturnValue == 'undefined')
	{
		this.heavyReturnValue = "heavy=n;"
		if (typeof document.referrer != "undefined")
		{
			if (document.referrer == '') this.heavyReturnValue = "heavy=y;"
		}
	}
	return this.heavyReturnValue
}

//writes a doubleclick tile keyvalue


// add pos and delivery
function tile(tileBoolean,varDcCount,thisPos,delivery)
{
	if(!tileBoolean) return
	
	this.tileReturnValue = varDcCount;
	if(delivery=='AJAX')
	{
		if(typeof AJAXTileArray == 'undefined')
		{
			this.AJAXTileArray = new Array();
		}
		if(!this.AJAXTileArray[thisPos.slug + delivery])
		{
			this.AJAXTileArray[thisPos.slug + delivery] = varDcCount;
		}
		else
		{
			this.tileReturnValue = this.AJAXTileArray[thisPos.slug + delivery]
		}
	}
	return "tile=" + this.tileReturnValue + ";"
}

//returns a string that is the current date plus an amount of milliseconds, passed in the argument
function cookieExpStringMaker() {
 var today = new Date()
 var todayPlusDay = today.getTime() + arguments[0]
 today.setTime(todayPlusDay)
 return '' + today + ''
}




function thisDate()
{
	if (typeof this.dateReturnValue == 'undefined')
	{
		var estNow = new Date();
		var estNowInMillis = estNow.getTime();
		var millisFromEST = (estNow.getTimezoneOffset() - 240) * 60000;
		this.dateReturnValue = new Date( estNowInMillis + millisFromEST )
	}
	return this.dateReturnValue
}


function dateToString()
{
	if (typeof this.dtsReturnValue == 'undefined')
	{
		var thisDateObj = thisDate()
		var yyyy = thisDateObj.getYear();
		yyyy += (yyyy < 1900 )?1900:0;
		var mm = thisDateObj.getMonth() + 1;
		var dd = thisDateObj.getDate();
		var hour = thisDateObj.getHours();
		var min = thisDateObj.getMinutes();
		if (mm < 10) mm = "0"+mm;
		if (dd < 10) dd = "0"+dd;
		if (hour < 10) hour = "0"+hour;
		if (min < 10) min = "0"+min;
		this.dtsReturnValue = ''+yyyy+mm+dd+hour+min;
	}
	return this.dtsReturnValue
}

function dayOfWeekCheck(now,dosString)
{
 //if day of week string is undefined, return true
 if(typeof dosString == 'undefined') return true;
 dosDate = thisDate()
 thisDos = dosDate.getDay()
 return (dosString.match(thisDos))?true:false
}

function dateCheck(when,now)
{
 
 this.dateCheckReturnValue=false;
 if (typeof when == "undefined" || when == '')
 {
  this.dateCheckReturnValue = true;
 }
 else
 {
  dateSets = when.split(';')
  for (x=0;x<dateSets.length;x++)
  {
   if (now >= dateSets[x].split('/')[0] && now <= dateSets[x].split('/')[1] && dayOfWeekCheck(now,dateSets[x].split('/')[2]))
   {
    this.dateCheckReturnValue=true
   }
  }
 }
 return this.dateCheckReturnValue 
}

function locationCheck(where,currentLoc)
{
 	//if empty string is passed for where, it's ROS, so true
 	if (typeof where == 'undefined' || where == '')
 	{
		return true
	}

	var nodes = where.split(';');
	
	//default value is true unless one or more checks is for an positive match--then default is false
	this.locCheckReturnValue = true;
 	for (var x=0;x<nodes.length;x++)
	{
		if(nodes[x].charAt(0)!='!')
		{
			this.locCheckReturnValue = false;
		}
	}

	for (var x=0;x<nodes.length;x++)
	{

		//checking for positive or negative match?
		var posTest = (nodes[x].charAt(0)=='!')?false:true;
		//strips negative flag from start of string, if there is one
		nodes[x] = (nodes[x].charAt(0)=='!')?nodes[x].split('!')[1]:nodes[x];
		//makes this into a Reg Exp
		var posRegExp = RegExp(nodes[x],'gi');
		//checks pageId and currentLoc for a match
		
		var thisLocCheck = (currentLoc.match(posRegExp) || pageId().match(posRegExp))
		
		//if we have a match...
		if(thisLocCheck)
		{
			
			//if we have a match, and it is positive, make it true but continue checking the rest
			if(posTest)
			{
				this.locCheckReturnValue = true;
			}
			//if we have a match, but it is negative, make the return value negative and consider it done
			else
			{
				this.locCheckReturnValue = false;
				break;
			}
		}
	}
	
 	return this.locCheckReturnValue
}
 

function getHighestValue()
{
	var longest = 0;
	var loop;
	for (loop=0;loop<arguments.length;loop++)
	{
		if (arguments[loop] > longest)
		{
			longest = arguments[loop];
		}
	}
return longest;
}


function siteZoneDir(currentLoc)
{
		var currentLocArray = currentLoc.split('/');
		if(wpniSite == '')
		{
			this.szdReturnValue = currentLoc + ";";
		}
		else {
			this.szdReturnValue = wpniSite + "." + currentLoc + ";";
		}
		for(var x=0;x<currentLocArray.length;x++)
		{
			this.szdReturnValue += 'dir=' + currentLocArray[x] + ";"
		}
	return this.szdReturnValue
}


function adDelivery()
{
	var deliveryArray = ['AJAX','inline','adi'];
	var delivery = arguments[0].toString();
	for(var d=0;d<deliveryArray.length;d++)
	{
		if(delivery.match(deliveryArray[d]))
		{
			deliveryType = "iframe";
			break
		}
		else {
			deliveryType = "js";
		}
	}
	return deliveryType;
}

function kvAjax(delivery)
{
	return 'ajax=' + (  ( delivery=='AJAX'  )?'y':'n' ) + ';';	
}

function slugDisplay(slug)
{
	var slug = 'slug_' + slug;
	if(document.getElementById(slug))
	{
		document.getElementById(slug).style.display = 'block';
	}
	else
	{
		adopsDebug('<i style="color:#910004;font-weight:bold">Could not find a DIV with the ID of ' + slug + '</i><br/>' )
	}

	
}




function AdInstance()
{	
	this.when = new Array()
	this.where = new Array()
	this.isTest = false;
	this.managerListLength = 0
	this.AJAX = false;
	this.debugAction = function (output) { return debugTextArea(output) }
	
	
	this.dateObject = new Date()
	this.now = dateToString(this.dateObject)
	
	this.tile = true
	//this.flex = false
	
	this.interstitial = "dcopt=ist;"
	
	this.doubleClickFlag = true;
	this.doubleClickAdType = "adj";
	this.dcCode =  heavy() + pageId() + poe() + revsci() + dfpCompFunc() + rss(this.dateObject) + front();
	
	this.templateCheck = function(currentLoc,thisPos)
	{
		var templateTest = true;
		
		for(a in wpniAds.templates.rules)
		{
			
			var totalFlights = Math.max(wpniAds.templates.rules[a].where.length,wpniAds.templates.rules[a].when.length);
			
			for(var b = 0; b < totalFlights; b++)
			{	
				if(locationCheck(wpniAds.templates.rules[a].where[b],currentLoc) && dateCheck(wpniAds.templates.rules[a].when[b], dateToString()))
				{
					
					for(var c = 0; c < wpniAds.templates.rules[a].what.length; c++)
					{	
						var posTestFlag = (wpniAds.templates.rules[a].what[c].charAt(0) != '!')?a:false;
						var testNoExclam = wpniAds.templates.rules[a].what[c];
						var testNoExclam = (testNoExclam.charAt(0) != '!')?testNoExclam:testNoExclam.substring(1,wpniAds.templates.rules[a].what[c].length);
						var testRE = RegExp(testNoExclam.toLowerCase(),'gi')
						if(thisPos.slug.match(testRE) && testNoExclam != '')
						{				  
							templateTest = (posTestFlag)?a:false;
							adopsDebug('<b>Template Match [' + a + ']:</b> <i>' + posTestFlag + '</i> for <i>' + testRE + '</i><br>');
							
						}
					}
				}
			}
		}
		if(!templateTest)
		{
			adopsDebug('<i style="color:#910004;font-weight:bold">Failed template test</i><br>');
		}
		return templateTest;
	}
	
	this.testAction = function (testFlagArray)
	{	
		return doubleClickTestCode(testFlagArray)
	}
	
	this.code = '';
	
	

	
	//START OF 
	this.adExecute = function (currentLoc,what,delivery,onTheFly,thisPos,old_ajax)
	{
		adopsDebug('currentLoc='+currentLoc+'&nbsp;&nbsp; what='+what+'&nbsp;&nbsp; onTheFly='+onTheFly+'&nbsp;&nbsp; thisPos='+thisPos.keyvalue + '&nbsp;&nbsp;deliveryType = ' + adDelivery(delivery))
		
		
		var targetDivId = 'wpni_adi_' + thisPos.slug;
		slugDisplay(thisPos.slug);
		var dcAdDelivery = "del=" + adDelivery(delivery) + ";";
		var dcMediaServer = (adDelivery(delivery)=="iframe")?'adi':'adj';
	
		
		
		
		adopsDebug('&nbsp;&nbsp;thisPos='+thisPos.keyvalue+'&nbsp;&nbsp;slugId=slug_'+thisPos.slug+'&nbsp;&nbsp;targetDivId='+targetDivId + '&nbsp;&nbsp;deliveryType = ' + dcAdDelivery + '&nbsp;&nbsp;dcMediaServer =' + dcMediaServer + '<br>')
	
		
	
		if(this.adType == 'inline')
   		{	
			var inlineAdGraf = getInlineAdGraf(this)
			if(!inlineAdGraf)
			{
				adopsDebug('<i style="color:#910004;font-weight:bold">It is an inline ad but we couldn\'t find a good space for the inline ad in the container DIV ' + this.parentId + '.</i><br/>' )
				return;
			}
			else
			{
				var inlineDiv = document.createElement('div');
				inlineDiv.style.width = maxDim(this)[0] + 'px';
				inlineDiv.style.height = maxDim(this)[1] + 'px';
				inlineDiv.style.margin = "8px 0px";
				inlineDiv.id = targetDivId;
				document.getElementById(this.parentId).insertBefore(inlineDiv, inlineAdGraf )
				
				if(this.slugURL)
				{
					inlineAdSlugDiv = document.createElement('div');
					inlineAdSlugDiv.id = 'slug_' + thisPos.slug;
					inlineAdSlugDiv.style.marginTop = "8px";
					inlineAdSlugImg = document.createElement('img');
					inlineAdSlugImg.src = this.slugURL;
					inlineAdSlugDiv.appendChild(inlineAdSlugImg);
					document.getElementById(this.parentId).insertBefore(inlineAdSlugDiv,inlineDiv )
				}
		 	}
		}

		if(delivery == 'AJAX' && !document.getElementById(targetDivId))
		{
			adopsDebug('<i style="color:#910004;font-weight:bold">It is an AJAX call but we could not find the target DIV.</i><br/>' )
			return;
		}
		
		if(delivery == 'inline')
		{
			document.write('<div id="'+ targetDivId +'"></div>')
		}
		

		//if this is a doubleclick thing, iterate (or initialize) the tile number. 
		
		
		
		if (this.doubleClickFlag == true)
		{ 
			if (typeof varDcCount == 'undefined')
			{
			 	varDcCount = 1
			}
			else
			{
				varDcCount++
			}
			//var adAddress = "http://ad.doubleclick.net/" + dcMediaServer + "/" + siteZoneDir(currentLoc) + this.code + this.testAction(this.testFlagArray) + wpFlex(this.size) + dcAdDelivery + kvAjax(dcAdDelivery) + tile(this.tile,varDcCount,what,AJAXflag) + interstitial(this.interstitial,varDcCount) + this.dcCode + thisPos + onTheFly +  ordMaker(AJAXflag) +  "?"
			
			var adAddress = "http://ad.doubleclick.net/" + dcMediaServer + "/" + siteZoneDir(currentLoc) + this.code + this.testAction(this.testFlagArray) + dcAdDelivery + kvAjax(delivery) + interstitial(this.interstitial,varDcCount) + this.dcCode + 'pos=' + thisPos.keyvalue + ';' + ajaxOrdMaker(delivery) + onTheFly + wpFlex(this.size) + tile(this.tile,varDcCount,thisPos,delivery )+ ordMaker() +  "?"

		}
			
		if (dcMediaServer == 'adi')
		{
			iframeObj = document.createElement('iframe');
			iframeObj.setAttribute('src',adAddress);
			iframeObj.style.width = maxDim(this)[0] + 'px';
			iframeObj.style.height = maxDim(this)[1] + 'px'
			iframeObj.setAttribute('marginWidth','0');
			iframeObj.setAttribute('marginHeight','0');
			iframeObj.setAttribute('frameBorder','0');
			iframeObj.setAttribute('scrolling','no');
			iframeObj.setAttribute('allowTransparency','true');
			iframeObj.style.border = "none"
			
			
			adDivRef = document.getElementById(targetDivId)
					
			if(adDivRef.hasChildNodes())
			{
    			while ( adDivRef.childNodes.length >= 1 )
    			{
       				adDivRef.removeChild(adDivRef.firstChild );
    			} 
			}
			adDivRef.appendChild(iframeObj);
			
			adopsDebug('<b>'+targetDivId+' Appended Iframe Ad Call:</b> '+ textifyCode(adDivRef.innerHTML) + '<br/>')
		}
		else
		{
			var output="<s\cript language='JavaScript1.1' src='" + adAddress + "'></s\cript>";
			document.write(output);
			adopsDebug('<b>document-written call:</b> ' + textifyCode(output) + '<br>');
			debugTextArea(output,adAddress);
		}
	}
}


function placeAd2(currentLoc,what,delivery,onTheFly)
{	

	if (location.href.match('no_ads'))
	{
		return
	}
	
	adopsDebug('<div style="margin-top:10px;font-size:14px;font-weight:bold">placeAd2("'+currentLoc+'","'+what+'","'+delivery+'","'+onTheFly+'")</div>')
	if(typeof onTheFly == 'undefined')
	{
		onTheFly = ''
	}
	
	
	var currentLoc = hackBin('currentLoc',currentLoc,what,delivery,onTheFly);
	var what = hackBin('what',currentLoc,what,delivery,onTheFly);
	var delivery = hackBin('delivery',currentLoc,what,delivery,onTheFly);
	var onTheFly= hackBin('onTheFly',currentLoc,what,delivery,onTheFly);
	
	
	var old_ajax = false;	
	if(what.match('AJAX'))
	{
		var delivery = 'AJAX';
		var what = what.replace(/AJAX/,"|");
		var old_ajax = true;
	}
	var posOverride = what.split('|')[1];
	var adType = what.split('|')[0];
	var thisPos = posMaker(adType,posOverride,delivery);	
	
	
	//if array adClasses doesn't exist, initializes it.
	if (typeof adClasses == "undefined")
	{
		var adClasses = new Array()
	}

	//if the abstract ad type (adType) doesn't exist in the array adClasses, define it with initAdType

	if (typeof adClasses[adType] == "undefined")
	{
		adClasses[adType] = initAdType(adType)
	}
	
	
	
	//run this adtype's  method, which actually does what has to be done.
	
	if(adClasses[adType].isTest && location.href.match('testAdSpots'))
	{
		adopsDebug('<b style="color:#009900">This is a test spot.</b></br>');
	}
	else if (adClasses[adType].isTest)
	{
		adopsDebug('<b style="color:#990000">This is a test spot and there is no "testAdSpots" in the query string, so it did not get rendered.</b>');
	}
	
	var testCheck = !adClasses[adType].isTest || location.href.match('testAdSpots');
	var tempCheck = adClasses[adType].templateCheck( currentLoc,thisPos );
	if( (tempCheck && testCheck) || location.href.match('allAds') )
	{	
		var hardcodes = (wpniAds.templates.rules[tempCheck])?wpniAds.templates.rules[tempCheck].hardcodes:false;
		if(hardcodes)
		{
			if(typeof hardcodes == 'object') 
			{
				hardcodes = hardcodes[Math.floor(Math.random() * hardcodes.length)]	
			}
			slugDisplay(thisPos.slug)
			document.write(hardcodes);
			adopsDebug('<div style="color:#770077"><b>Rendered hardcode on behalf of template <i>' + tempCheck+ ' </i>:</b><br/>' + textifyCode(hardcodes) + '</div>')
		}
		else
		{
			adClasses[adType].adExecute(currentLoc,adType,delivery,onTheFly,thisPos,old_ajax)
		}
	}
}

function posMaker(adType,posOverride,delivery)
{
	
	if(posOverride || delivery=='AJAX')
	{
		var returnValue = adType + ((posOverride) ? '_' + posOverride : '');
	}
	else
	{
		if (typeof this.usedSpots == 'undefined')
		{
			this.usedSpots = new Array();
		}
		if (this.usedSpots[adType] == null)
		{
			this.usedSpots[adType] = 1;
			returnValue = adType;
		}
		else
		{
			this.usedSpots[adType]++;
			returnValue = adType+"_"+this.usedSpots[adType];
		}
	}
		
	return  { 'keyvalue' : returnValue , 'slug' : returnValue };

}


function getInlineAdGraf(thisAdType) {

	var bottom_of_obstacle = 0;
	if(document.getElementById(thisAdType.obstacleId))
		{
			var obstacle = document.getElementById(thisAdType.obstacleId);
			var bottom_of_obstacle = obstacle.offsetTop+obstacle.offsetHeight;
		}
		
	var grafs = document.getElementById(thisAdType.parentId).getElementsByTagName(thisAdType.childElement);
		
	if(bottom_of_obstacle == 0 && grafs.length > 4)
	{
		var targetGrafNum = Math.min(Math.ceil(grafs.length/3),4);
			adopsDebug('<span style="font-style:bold;font-color:#009900">Found No Obstacle! Putting inline ad after Graf #' + targetGrafNum + '</span><br/>');
		return grafs[targetGrafNum]
	}
	else
	{
		for( var i=0; i<grafs.length; i++ )
		{
			if ( grafs[i].offsetTop > bottom_of_obstacle + thisAdType.obstacleMargin && i < grafs.length - 2)
			{
				adopsDebug('<span style="font-style:bold;font-color:#009900">Cleared an Obstacle! Putting inline ad after Graf #' + i + '</span><br/>');
				return grafs[i] ;
			}
		}
	}

	return false;
}

function textifyCode(_code)
{
	_code = _code.replace(/</gi,'&lt;');
	_code = _code.replace(/>/gi,'&gt;');
	return _code;
}


//this function varies from site to site, so this is just a shell
function front()
{
	return '';
}

googleAds = {'googleVars':{'google_safe':'high','google_ad_client':'ca-washingtonpost-article-site_js','google_ad_output':'js','google_ad_channel':'other','google_skip':0,google_max_num_ads:3,google_ad_section:'default'}};

googleAds.nodeHacks = [];
googleAds.hideBox = "";
//googleAds.nodeHacks = ['/comics','/foodanddining','/travel','/crosswords'];

googleAds.nodeCheck = function (cNode)
{
   //loops through nodeHacks
   for(var a = 0; a < this.nodeHacks.length; a++)
   {
		if(cNode.match(this.nodeHacks[a]))
		{
			nodeReg = RegExp(this.nodeHacks[a],'gi');
			return this.nodeHacks[a].replace(/[^a-z0-9]/gi,'');
		}
   }
   return cNode.split('/')[0];
}
googleAds.debug = function ()
{
	 for(var a in this.googleVars)
	 {
	    adopsDebug('<b>' + a + ':</b> ' + this.googleVars[a]+'<br>');
	 }
	return true;
}

//function to see if the vertical distance between two elements is larger than the viewport
googleAds.vertCheck = function (posId1,posId2)
{
		wpniAds.utils.wabs.recalc();
		var windowHeight = wpniAds.utils.wabs.windowheight;
		var offset1=document.getElementById(posId1).offsetTop;
		var offset2=document.getElementById(posId2).offsetTop;
		adopsDebug('<b>' + posId1 + ' vertical position:</b> ' + offset1 + '<br>');
		adopsDebug('<b>' + posId2 + ' vertical position:</b> ' + offset2 + '<br>');
		adopsDebug('<b>windowHeight:</b> ' + windowHeight + '<br>');
       		//return boolean answer to this question:
	        //is the distance between the two boxes greater than the height of the viewport?
		return (offset1 - offset2 > windowHeight) || (offset2 - offset1 > windowHeight);
		adopsDebug(e + '<br/>')
		return;

}

googleAds.execute = function (clientId,pageType,cNode,pos,adCount,test)
{
 adopsDebug('<b style="font-size:12px">googleAds("'+clientId+'","'+pageType+'","'+cNode+'","'+pos+'","'+adCount+'",'+test+')</b><br>');
 this.googleVars.google_ad_client = clientId;
 if(pageType != "")
 {
	var setPageType =  pageType + '_';
 }
 else {
	setPageType = "";
 }

 this.googleVars.google_ad_channel = setPageType + this.nodeCheck(cNode,pos) + '_' + pos;
 this.googleVars.google_max_num_ads = adCount;
 this.googleVars.google_adtest = (test)?'on':'off';
 for(var a in this.googleVars)
 {
  eval(a + '="' + this.googleVars[a] + '"');
 }
 
 if( pos != googleAds.hideBox || !document.getElementById('googleBottomBox') || googleAds.vertCheck('googleBottomBox','googleRightBox')  )
 { 
  document.write('<div style="clear:both"></div><s\cript type="text/javascript" src="http://www.washingtonpost.com/wp-srv/ad/google_display.js"></s\cript>');
  this.debug();
 this.googleVars.google_skip += parseInt(adCount);
 }
 else
 {
 this.debug();
  adopsDebug('<b>Sorry, the divs were too close vertically to render a ' + googleAds.hideBox + ' adSense box.</b><br>');
 }
}





