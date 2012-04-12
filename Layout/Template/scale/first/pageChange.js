function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

function updateTo(number, id, newPage, marker, question)
{
  string = "<p><b>" + number + ". " + question + ".</b><br /> <div class =\"scale\" style = \"display: inline\">SD |</div>";
  for (y=1;y<=100;y++){
    if(y == marker)
      {
	string += "\n<div class=\"scale\" style = \"display:inline\"><b style=\"color:red;\">X</b></div>";
      }
    else
      {
	string += "\n<div class =\"scale\" style = \"display: inline\">-</div>";
      }
  }
  string += "<div class =\"scale\" style = \"display: inline\">| SA</div></p><br/>";
  document.getElementById(id).innerHTML = string;
  
  document.getElementById('next').value += "&q" + number + "=" + marker;
  
  var xmlhttp;
  if (window.XMLHttpRequest)
    {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }
  else if (window.ActiveXObject)
    {
      // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  else
  {
    alert("Your browser does not support XMLHTTP!");
  }
  xmlhttp.onreadystatechange=function()
    {
      if(xmlhttp.readyState==4)
	{
	  pause(500);
	  document.getElementById(id).innerHTML = xmlhttp.responseText;
	}
    }
  xmlhttp.open("GET",newPage,true);
  xmlhttp.send(null);
}

function changeTheStuff(id, newPage)
{
  document.getElementById('lib').innerHTML = '<embed src=\"' + newPage + '\" width=\"100%\" height=\"100%\"/>';
  

}

function goTo (number, id, page, marker, question) {
   string = "<p><b>" + number + ". " + question + ".</b><br /> <div class =\"scale\" style = \"display: inline\">SD |</div>";
  for (y=1;y<=100;y++){
    if(y == marker)
      {
	string += "\n<div class=\"scale\" style = \"display:inline\"><b style=\"color:red;\">X</b></div>";
      }
    else
      {
	string += "\n<div class =\"scale\" style = \"display: inline\">-</div>";
      }
  }
  string += "<div class =\"scale\" style = \"display: inline\">| SA</div></p><br/>";
  document.getElementById('question').innerHTML = string;
  
  //pause(500);
  document.location.href = document.getElementById('next').value + "&q41= " + marker;
  
}
