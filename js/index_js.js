window.onload = init;

function init()
{
	var blog = document.getElementById("blog");
	blog.onclick = blogClick;
	var face = document.getElementById("facebook");
	face.onclick = faceClick;
	var ins = document.getElementById("instagram");
	ins.onclick = insClick;
}

function blogClick()
{
	alert("Blog is building! It's coming soon.");
}

function faceClick()
{
	alert("You'll be move to Facebook.com!");
}

function insClick()
{
	alert("You'll be move to Facebook.com!");
}