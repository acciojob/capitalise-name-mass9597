//your JS code here. If required.

const input = document.getElementById("fname");

function convertToUpperCase(){
	input.value = input.value.toUpperCase();

}

window.onload = function(){
	input.addEventListener("blur",convertToUpperCase);
}








