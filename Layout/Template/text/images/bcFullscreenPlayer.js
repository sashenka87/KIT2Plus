
function bcFullscreenPlayer(config){
	var bcServerRunning = true;

	if (bcServerRunning){
		var version = deconcept.SWFObjectUtil.getPlayerVersion();

		if (config["flashid"] == null){
			config["flashid"] = config["divid"]+"fobj";
		}

		if (document.getElementById && (version['major'] == 0)){
			document.getElementById(config["divid"]).innerHTML = "<a href='http://www.adobe.com/go/getflashplayer'><img src='http://bc.newsweek.com/media/nw_flash_install_ccol.jpg' border=0></a>";
		} 
		else if (document.getElementById && (version['major'] > 0 && version['major'] < 8)){
			document.getElementById(config["divid"]).innerHTML = "<a href='http://www.adobe.com/go/getflashplayer'><img src='http://bc.newsweek.com/media/nw_flash_upgrade_ccol.jpg' border=0></a>";
		} 
		else {
			
			var swfPath = "http://bc.newsweek.com/players/v2/";
			var swfFile = "mini_player.swf";
			var width = 242;
			var height = 370;

			if (config["width"] > 0) width = config["width"];
			if (config["height"] > 0) height = config["height"];
						
			if (matchConfig(config["url"]) || config["type"] == "link"){
				swfFile = "loader.swf";
				width = 976;
				height = 500;
			} 
			else if (config["type"] == "arthead" || config["type"] == "lineup" || config["type"] == "single") {
				swfFile = "arthead/loader_arthead.swf";
				config["showLineup"]= new String(config["type"] != "single");
				
				if (config["width"] > 0) width = config["width"];
				else width = 254;
				if (config["height"] > 0) height = config["height"];
				else height = 322;
			}	
			
			swfFile += "?v=3";
			
			config["width"] = width;
			config["height"] = height;

			// Brightcove Settings
			var so = new SWFObject(swfPath+swfFile, config["flashid"], width, height, "8", config["bgcolor"]);
						
			if (config["wmode"]) so.addParam("wmode", config["wmode"]);
			
			for (var i in config)
				if (config[i]) so.addVariable(i, config[i]);
			//if (config["type"] == "mini_lineup") so.addVariable("startMinimized", "true");
			//else if (config["type"] == "mini_standard") so.addVariable("startMinimized", "false");
			so.addVariable("startMinimized", "false");

			var queryStr = new String(window.location.search);
			queryStr = queryStr.substr(1);
			var queryPairs = queryStr.split("&");
			if(queryPairs.length<=1){
				queryPairs = getV2Qs();
			}
				for(var x=0;x<queryPairs.length;x++){
					var valPair = queryPairs[x].split("=");
					if(valPair[0]!=null && valPair[1]!=null){
						so.addVariable(valPair[0], valPair[1]);
					}
				}

			var platform = new String(navigator.platform);
			if(platform.indexOf("Win") > -1){
				so.addVariable("iswin", "true");
			}
			
			so.addVariable("autoStart", "true");
			so.addVariable("moreTab", "true");
			so.addVariable("r", Math.floor(Math.random()*100000000));
			so.addParam("allowFullScreen", "true");
			so.addParam("allowScriptAccess", "always");
			so.addParam("allowScripting", "always");
			so.addParam("base", swfPath);

			so.write(config["divid"]);
		} 	
	}
	else {
		document.getElementById(config["flashid"]).innerHTML = "FALSE";
	}
}


function matchConfig(c) {
	if (c == undefined) return false;
	var u = new String(window.location.href);
	var p = u.indexOf("/id/"+c+"#?");
	if(p < 0) p = u.indexOf("/id/"+c);
	return (p>-1);
}


function getV2Qs() {

	var loc = new String(window.location);
	var locPairs = loc.split("#?");
	var fvars = new Array();
	if(locPairs.length > 1){
		queryStr = locPairs[1];
		var queryPairs = queryStr.split("&");
		if(queryPairs.length > 0) {
			for(var x = 0; x < queryPairs.length; x++) {
				fvars.push(queryPairs[x]);
			}
		}
	}	
	return fvars;
}

function getPopupPlayer(u){
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open('"+u+"', '" + id + "', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=0,width=1020,height=640');");
}
function changeTitle(t){
	if(t==null || t=="undefined" || t=="null"){
		document.title = "Newsweek Video";
	}
	else {
		document.title = "Newsweek Video | "+t;
	}
	
}


function changeLoc(p_c,p_l,p_t){
	var c = ""; var l = ""; var t = "";
	if(p_c!=null && p_c!="undefined" & p_c!="null") c = p_c;
	if(p_l!=null && p_l!="undefined" & p_l!="null") l = p_l;
	if(p_t!=null && p_t!="undefined" & p_t!="null") t = p_t;
	 
	if(c!=""){
		var loc = new String(window.location);
		var locPairs = loc.split("#?");
		if(locPairs.length > 1){
			loc = locPairs[0];
		}
		window.location = loc + "#?l="+l+"&t="+t;
	}
	
}

//to prevent errors in netscape
function onFSCommand() {}