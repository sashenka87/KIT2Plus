function navigate(){
	var nav= document.getElementById('nav');
	var current= document.getElementById('current');
	nav.style.top=current.offsetTop+'px';
}