var _startX = 0; // mouse starting positions 
var _startY = 0; 
var _offsetX = 0; // current element offset 
var _offsetY = 0; 
var _dragElement; // needs to be passed from OnMouseDown to OnMouseMove 
var _oldZIndex = 0; // we temporarily increase the z-index during drag 
//var _debug = $('debug'); // makes life easier
var _box = $('box');
var _bsl = 0;
var _bst = 0;
var _ksl = 0;
var _kst = 0;
var _kml = 0;
var _kmt = 0;
var _kll = 0;
var _klt = 0;
var _isl = 0;
var _ist = 0;
var _iml = 0;
var _imt = 0;
var _ill = 0;
var _ilt = 0;
var _tsl = 0;
var _tst = 0;
var _tml = 0;
var _tmt = 0;
var _tll = 0;
var _tlt = 0;
var _start = true;

document.onmousedown = OnMouseDown; 
document.onmouseup = OnMouseUp; 

function OnMouseDown(e) {
  if(_start)
    {
      findPos();
      _start=false;
    }
  if (e == null) e = window.event; 
  
  var target = e.target != null ? e.target : e.srcElement; 
  //_debug.innerHTML = target.className == 'drag' ? 'draggable element clicked' : 'NON-draggable element clicked'; 
  
  // for IE, left click == 1 
  // for Firefox, left click == 0 
  if ((e.button == 1 && window.event != null || e.button == 0) && target.className == 'drag') { 
    // grab the mouse position 
    _startX = e.clientX;
    _startY = e.clientY; 
    
    // grab the clicked element's position 
    //_offsetX = target.style.left; 
    //_offsetY = target.style.top;
    
    // bring the clicked element to the front while it is being dragged 
    _oldZIndex = target.style.zIndex; 
    target.style.zIndex = 10000; 
    
    // we need to access the element in OnMouseMove
    _dragElement = target;
    
    // tell our code to start moving the element with the mouse 
    document.onmousemove = OnMouseMove;
    
    // cancel out any text selections 
    document.body.focus();
    
    // prevent text selection in IE 
    document.onselectstart = function () { return false; }; 

    // prevent IE from trying to drag an image 
    target.ondragstart = function() { return false; }; 
    
    // prevent text selection (except IE)
    return false; 
} 
}

function OnMouseMove(e)
 { 
   if (e == null)
     var e = window.event; 
    
   _dragElement.style.left = (e.clientX);
   _dragElement.style.top = (e.clientY); 
   //_debug.innerHTML = '(' + _dragElement.style.left + ', ' + _dragElement.style.top + ')'; 
 }

function OnMouseUp(e)
{
	if (_dragElement != null)
	{
		_dragElement.style.zIndex = _oldZIndex;

		document.onmousemove = null;
		document.onselectstart = null;
		_dragElement.ondragstart = null;

		if(_dragElement.id == "ks")
		  {
		    _box.k = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.k;
		    $('km').style.left = _kml;
		    $('km').style.top = _kmt;
		    $('kl').style.left = _kll;
		    $('kl').style.top = _klt;
		    $('ktype').value = 's';
		    $('ktop').value = parseInt(_dragElement.style.top) - parseInt(_bst);
		    $('kleft').value = parseInt(_dragElement.style.left) - parseInt(_bsl);
		  }
		if(_dragElement.id == "km")
		  {
		    _box.k = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.k;
		    $('ks').style.left = _ksl;
		    $('ks').style.top = _kst;
		    $('kl').style.left = _kll;
		    $('kl').style.top = _klt;
		    $('ktype').value = 'm';
		    $('ktop').value = parseInt(_dragElement.style.top) - _bst;
		    $('kleft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "kl")
		  {
		    _box.k = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.k;
		    $('km').style.left = _kml;
		    $('km').style.top = _kmt;
		    $('ks').style.left = _ksl;
		    $('ks').style.top = _kst;
		    $('ktype').value = 'l';
		    $('ktop').value = parseInt(_dragElement.style.top) - _bst;
		    $('kleft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "is")
		  {
		    _box.i = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.i;
		    $('im').style.left = _iml;
		    $('im').style.top = _imt;
		    $('il').style.left = _ill;
		    $('il').style.top = _ilt;
		    $('itype').value = 's';
		    $('itop').value = parseInt(_dragElement.style.top) - _bst;
		    $('ileft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "im")
		  {
		    _box.i = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.i;
		    $('is').style.left = _isl;
		    $('is').style.top = _ist;
		    $('il').style.left = _ill;
		    $('il').style.top = _ilt;
		    $('itype').value = 'm';
		    $('itop').value = parseInt(_dragElement.style.top) - _bst;
		    $('ileft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "il")
		  {
		    _box.i = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.i;
		    $('im').style.left = _iml;
		    $('im').style.top = _imt;
		    $('is').style.left = _isl;
		    $('is').style.top = _ist;
		    $('itype').value = 'l';
		    $('itop').value = parseInt(_dragElement.style.top) - _bst;
		    $('ileft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "ts")
		  {
		    _box.t = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.t;
		    $('tm').style.left = _tml;
		    $('tm').style.top = _tmt;
		    $('tl').style.left = _tll;
		    $('tl').style.top = _tlt;
		    $('ttype').value = 's';
		    $('ttop').value = parseInt(_dragElement.style.top) - _bst;
		    $('tleft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "tm")
		  {
		    _box.t = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.t;
		    $('ts').style.left = _tsl;
		    $('ts').style.top = _tst;
		    $('tl').style.left = _tll;
		    $('tl').style.top = _tlt;
		    $('ttype').value = 'm';
		    $('ttop').value = parseInt(_dragElement.style.top) - _bst;
		    $('tleft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
		if(_dragElement.id == "tl")
		  {
		    _box.t = "(" + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
		    //_debug.innerHTML = _box.t;
		    $('tm').style.left = _tml;
		    $('tm').style.top = _tmt;
		    $('ts').style.left = _tsl;
		    $('ts').style.top = _tst;
		    $('ttype').value = 'l';
		    $('ttop').value = parseInt(_dragElement.style.top) - _bst;
		    $('tleft').value = parseInt(_dragElement.style.left) - _bsl;
		  }
	
		
		_dragElement = null;
	}
}
function $(id)
{
	return document.getElementById(id);
}
function findPos() {
	var curleft = curtop = 0;
	var obj = $('box');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _bsl = curleft;
	  _bst = curtop;
	  _box.style.left = curleft;
	  _box.style.top = curtop;
	}
	curleft = curtop = 0;
	obj = $('ks');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _ksl = curleft;
	  _kst = curtop;
	}
	curleft = curtop = 0;
	obj = $('km');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _kml = curleft;
	  _kmt = curtop;
	}
	curleft = curtop = 0;
	obj = $('kl');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _kll = curleft;
	  _klt = curtop;
	}
	curleft = curtop = 0;
	obj = $('is');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _isl = curleft;
	  _ist = curtop;
	}
	curleft = curtop = 0;
	obj = $('im');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _iml = curleft;
	  _imt = curtop;
	}
	curleft = curtop = 0;
	obj = $('il');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _ill = curleft;
	  _ilt = curtop;
	}
	curleft = curtop = 0;
	obj = $('ts');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _tsl = curleft;
	  _tst = curtop;
	}
	curleft = curtop = 0;
	obj = $('tm');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _tml = curleft;
	  _tmt = curtop;
	}
	curleft = curtop = 0;
	obj = $('tl');
	if(obj.offsetParent){
	  do{
	    curleft+=obj.offsetLeft;
	    curtop+=obj.offsetTop;
	  }while(obj = obj.offsetParent);
	  _tll = curleft;
	  _tlt = curtop;
	}
}
