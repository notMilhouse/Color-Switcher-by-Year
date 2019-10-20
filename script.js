function setYear(){
    var year = document.getElementById("yearInput").value; //from user input
    var respectiveColor = year % 7;
    document.getElementById("year").innerHTML = year;
    document.getElementById("box").style.background = colorList[respectiveColor];
}

var colorList = ["#EFD567","#A44878","#3047A3","#FFAC13","#188734","#28C9FA","#D4433A"];
var year = new Date().getFullYear(); //current year
var respectiveColor = year % 7;

document.getElementById("year").innerHTML = year;
document.getElementById("box").style.background = colorList[respectiveColor];
