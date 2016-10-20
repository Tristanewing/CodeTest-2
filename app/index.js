

	function animate_string(id)   
{  
    var element = document.getElementById(id);  
    var textNode = element.childNodes[0]; // assuming no other children  
    var text = textNode.data;  
  
setInterval(function ()   
{  
 text = text[text.length - 1] + text.substring(0, text.length - 1);  
  textNode.data = text;  
}, 100);  
}  





$(document).ready(function(){  


var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
console.log("Today is : " + daylist[day] + ".");  
var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
var prepand = (hour >= 12)? " PM ":" AM ";  
hour = (hour >= 12)? hour - 12: hour;  
if (hour===0 && prepand===' PM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Noon';  
}   
else  
{   
hour=12;  
prepand=' PM';  
}   
}   
if (hour===0 && prepand===' AM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Midnight';  
}   
else  
{   
hour=12;  
prepand=' AM';  
}   
}   
 document.getElementById("time").innerHTML="Current Time : "+hour + prepand + " : " + minute + " : " + second;  


  


	var array= [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

	function bubbleSort(array)
	{
		var swapped;
		do {
			swapped = false;
			for (var i=0; i < array.length-1; i++) {
				if (array[i] > array[i+1]) {
					var temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
					swapped = true;
				}
			}
		} while (swapped);
	}

	bubbleSort(array);
	console.log(array);

	

	$("#button").click(function(){
		var text= "This is a click event"

		paragraph.innerHTML= text
	});

	$("#button").dblclick(function() {
		var words= "This is a double-click event"
		paragraph2.innerHTML= words

	});

	$("#button2").on("click", function() {
		$("#color").css("background-color", "blue")

	});




	});



