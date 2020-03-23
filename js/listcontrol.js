var title_array = ["Interests","Programming Interests","Learning about"];
var list1 = ["Programming &#x1F4BB","Computer Networking","Computer Hardware","Internet of Things (IoT)","Sci-Fi &#x1F47E"];	
var list2 = ["Mobile App Development &#x1F4F2","Network Programming","Cloud Computing ","Automation Software","Random projects from GitHub &#x1F609;"];
var list3 = ["Game Development &#x1F3AE","Blockchain","Artiicial Intelligence","Security Exploits","Advanced Algorithms &#x1F4C8"];
var i=0;



function ref(){

if(i==0)
{
	document.getElementById("h2text").innerHTML=title_array[0];
	document.getElementById("ele1").innerHTML=list1[0];
	document.getElementById("ele2").innerHTML=list1[1];
	document.getElementById("ele3").innerHTML=list1[2];
	document.getElementById("ele4").innerHTML=list1[3];
	document.getElementById("ele5").innerHTML=list1[4];
}

if(i==1)
{
	document.getElementById("h2text").innerHTML=title_array[1];
	document.getElementById("ele1").innerHTML=list2[0];
	document.getElementById("ele2").innerHTML=list2[1];
	document.getElementById("ele3").innerHTML=list2[2];
	document.getElementById("ele4").innerHTML=list2[3];
	document.getElementById("ele5").innerHTML=list2[4];

}


if(i==2)
{
	document.getElementById("h2text").innerHTML=title_array[2];
	document.getElementById("ele1").innerHTML=list3[0];
	document.getElementById("ele2").innerHTML=list3[1];
	document.getElementById("ele3").innerHTML=list3[2];
	document.getElementById("ele4").innerHTML=list3[3];
	document.getElementById("ele5").innerHTML=list3[4];

}

if(i>3)
{
	i=0;
	ref();
}	

}

function onClickLeft(){
	i--;
	console.log("Hey there!, YOU PRESSED LEFT");
	ref();	
}


function onClickRight(){
	i++;
	console.log("Hey there!, YOU PRESSED RIGHT");
	ref();
}