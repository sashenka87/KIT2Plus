function updateTo(id, newPage)
{
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
    document.getElementById('times').value += ", went to " + newPage + " at " + new Date().getTime();
    document.getElementById(id).innerHTML = xmlhttp.responseText;
  }
}
xmlhttp.open("GET",newPage,true);
xmlhttp.send(null);
}

function changeTheStuff(id, newPage)
{
  document.getElementById('times').value += ", went to " + newPage + " at " + new Date().getTime();
  document.getElementById('lib').innerHTML = '<embed src=\"' + newPage + '\" width=\"100%\" height=\"100%\"/>';
}
