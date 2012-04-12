
function toggleNotice() {
	var notice = document.getElementById('centralNotice');
	if (!wgNoticeToggleState) {
		notice.className = notice.className.replace('collapsed', 'expanded');
		toggleNoticeCookie('0');
	} else {
		notice.className = notice.className.replace('expanded', 'collapsed');
		toggleNoticeCookie('1');
	}
	wgNoticeToggleState = !wgNoticeToggleState;
}
function toggleNoticeStyle(elems, display) {
	if(elems)
		for(var i=0;i<elems.length;i++)
			elems[i].style.display = display;
}
function toggleNoticeCookie(state) {
	var e = new Date();
	e.setTime( e.getTime() + (7*24*60*60*1000) ); // one week
	var work='hidesnmessage='+state+'; expires=' + e.toGMTString() + '; path=/';
	document.cookie = work;
}
function pickTemplate(templates, weights) {
	var weightedTemplates = new Array();
	var currentTemplate = 0;
	var totalWeight = 0;

	if (templates.length == 0)
		return '';

	while (currentTemplate < templates.length) {
		totalWeight += weights[currentTemplate];
		for (i=0; i<weights[currentTemplate]; i++) {
			weightedTemplates[weightedTemplates.length] = templates[currentTemplate];
		}
		currentTemplate++;
	}
	
	if (totalWeight == 0)
		return '';

	var randomnumber=Math.floor(Math.random()*totalWeight);
	return weightedTemplates[randomnumber];
}


var wgNoticeToggleState = (document.cookie.indexOf('hidesnmessage=1')==-1);
document.writeln("\x3cstyle type=\"text/css\"\x3e\n#centralNotice .siteNoticeSmall{display:none;}\n#centralNotice .siteNoticeSmallAnon{display:none;}\n#centralNotice .siteNoticeSmallUser{display:none;}\n#centralNotice.collapsed .siteNoticeBig{display:none;}\n#centralNotice.collapsed .siteNoticeSmall{display:block;}\n#centralNotice.collapsed .siteNoticeSmallUser{display:block;}\n#centralNotice.collapsed .siteNoticeSmallAnon{display:block;}\n#centralNotice.anonnotice .siteNoticeSmallUser{display:none !important;}\n#centralNotice.usernotice .siteNoticeSmallAnon{display:none !important;}\n\x3c/style\x3e");

wgNotice=pickTemplate(["\x3cstyle type=\"text/css\"\x3e \n/*\nStyles for  Notices\n*/\n\n.notice-wrapper-wikimania-reg, .notice-collapsed-wrapper-wikimania-reg {\n margin: 2px auto 0;\n width: 100%;\n padding: 0;\n font-family: \'Arial\',\'Helvetica\',\'Tahoma\',sans-serif;\n color: #333;\n background-color: #ddd;\n font-size: .9em;\n font-weight: 200;\n}\n\n.notice-wrapper-wikimania-reg\n{\n border: 1px solid #bbb;\n background-color: #fcfcfc;\n text-align: left;\n font-size: .9em;\n}\n\n.notice-wrapper-wikimania-reg a\n{\n color: #006699;\n}\n\n.trans-box\n{\n text-align: right;\n padding: 0;\n white-space: nowrap;\n}\n\n.toggle-box-wikimania-reg\n{\n text-align: right;\n padding: 0;\n white-space: nowrap;\n}\n\n.notice-text-wikimania-reg\n{\n margin: 0 auto;\n padding: 0 5px 3px 5px;\n font-size: 1.1em;\n}\n\n.notice-links-wikimania-reg\n{\n text-align:right;\n padding-right:4px;\n font-size: .9em;\n}\n\n.line-ht-fix\n{\n line-height: 1em;\n}\n\n#centralNotice.collapsed .siteNoticeUser\n{\n display:none;\n}\n\n\x3c/style\x3e\n\n\x3ctable class=\"siteNoticeUser notice-wrapper-wikimania-reg\"\x3e\n\x3ctr\x3e\n \x3ctd\x3e\n  \x3cdiv class=\"notice-text-wikimania-reg\"\x3e\n  Registration for Wikimania 2009 is now open. \x3ca href=\"http://wikimania2009.wikimedia.org/wiki/Registration\"\x3eLearn more.\x3c/a\x3e\n  \x3c/div\x3e\n \x3c/td\x3e\n \x3ctd class=\"line-ht-fix\"\x3e\n  \x3cdiv class=\"notice-links-wikimania-reg\"\x3e\n   \x3cspan class=\"toggle-box-wikimania-reg\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice();return\nfalse\"\x3eHide\x3c/a\x3e]\x3c/span\x3e \x3cspan class=\"trans-box\"\x3e[\x3ca href=\"http://meta.wikimedia.org/wiki/Wikimania_2009/CentralNotice\"\x3eHelp us with translations!\x3c/a\x3e]\x3c/span\x3e\n  \x3c/div\x3e\n \x3c/td\x3e\n\x3c/tr\x3e\n\x3c/table\x3e"],[100]);
if (wgNotice != '')
wgNotice='<div id="centralNotice" class="' + (wgNoticeToggleState ? 'expanded' : 'collapsed') + ' ' + (wgUserName ? 'usernotice' : 'anonnotice' ) + '">' + wgNotice+'</div>';
