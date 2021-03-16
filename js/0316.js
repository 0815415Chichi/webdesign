var name ="Chichi";
alert("Hello" + name);

var age = 19; 
var isBoy = false;
var fruits = ["melon","mango","strawberry"]; 

alert(age); 
alert(isBoy); 
alert(fruits[2]); 

var addition= function(num)
{
	return num+10;
};
var age = 28
var trueage = addition(age)
alert(trueage)

var age2 = 15
var trueage2 = addition(age2)
alert(trueage2)

document.getElementById("byid").innerHTML = "我來自id";
document.getElementById("byid").style.color = "blue";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize= "30px";

document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily = "微軟正黑體"; 

document.getElementsByTagName("p")[0].innerHTML = "我是Open將";
document.getElementsByTagName("p")[0].style.color = "brown";