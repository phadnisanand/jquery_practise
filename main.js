function main(a,b) {
	
	var sum = a + b;
	sub(sum);
}

function sub(sum) {
	
	document.getElementById('result').innerHTML=`sum is - ${sum}`;
}

var a = 10;
var b= 20;
main(a,b);
