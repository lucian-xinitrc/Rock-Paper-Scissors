var piatra = 0;
var foarfeca = 0;
var hartie = 0;
var p = "url(data/piatra.jpg)";
var num = Math.floor(Math.random() * 3);
var f = "url(data/foarfeca.jpg)";
var h = "url(data/hartie.jpg)";
var chef = "url(piatra.jpg)";
var imgArray = new Array();
imgArray[0] = "url(data/piatra.jpg)";
imgArray[1] = "url(data/foarfeca.jpg)";
imgArray[2] = "url(data/hartie.jpg)";
function piatraf(){
	piatra = 1;
	document.getElementById("table1").style.display="none";
	document.getElementById("table2").style.display="block";
	document.getElementById("fog4").style.backgroundImage = "url(data/piatra.jpg)";
	checkwin();
	adversar();
}
function foarfecaf(){
	foarfeca = 1;
	document.getElementById("table1").style.display="none";
	document.getElementById("table2").style.display="block";
	document.getElementById("fog4").style.backgroundImage = "url(data/foarfeca.jpg)";
	checkwin();
	adversar();
}
function hartief(){
	hartie = 1;
	document.getElementById("table1").style.display="none";
	document.getElementById("table2").style.display="block";
	document.getElementById("fog4").style.backgroundImage = "url(data/hartie.jpg)";
	adversar();
	checkwin();
}
function adversar(){
	if(hartie == 1)
	{
		document.getElementById("fog5").style.backgroundImage = imgArray[num];
	}
	if(piatra == 1)
	{
		document.getElementById("fog5").style.backgroundImage = imgArray[num];
	}
	if(foarfeca == 1)
	{
		document.getElementById("fog5").style.backgroundImage = imgArray[num];
	}
	checkwin();
}
function checkwin(){
	if(foarfeca == 1 && num == 0)
	{
		document.getElementById("hd").innerHTML = "Loser";
		document.getElementById("hf").innerHTML = "Winner";
	}
	if(foarfeca == 1 && num == 1)
	{
		document.getElementById("hd").innerHTML = "Draw";
		document.getElementById("hf").innerHTML = "Draw";
	}
	if(foarfeca == 1 && num == 2)
	{
		document.getElementById("hd").innerHTML = "Winner";
		document.getElementById("hf").innerHTML = "Loser";
	}

	if(piatra == 1 && num == 0)
	{
		document.getElementById("hd").innerHTML = "Draw";
		document.getElementById("hf").innerHTML = "Draw";
	}
	if(piatra == 1 && num == 1)
	{
		document.getElementById("hd").innerHTML = "Winner";
		document.getElementById("hf").innerHTML = "Loser";
	}
	if(piatra == 1 && num == 2)
	{
		document.getElementById("hd").innerHTML = "Loser";
		document.getElementById("hf").innerHTML = "Winner";
	}

	if(hartie == 1 && num == 0)
	{
		document.getElementById("hd").innerHTML = "Winner";
		document.getElementById("hf").innerHTML = "Loser";
	}
	if(hartie == 1 && num == 1)
	{
		document.getElementById("hd").innerHTML = "Loser";
		document.getElementById("hf").innerHTML = "Winner";
	}
	if(hartie == 1 && num == 2)
	{
		document.getElementById("hd").innerHTML = "Draw";
		document.getElementById("hf").innerHTML = "Draw";
	}
}