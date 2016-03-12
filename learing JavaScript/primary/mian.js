



function abc() {
	x=document.getElementById('demo');
    x.innerHTML="这是改变的内容";
    x.style.color="red";
}

function changeimg() {
	element=document.getElementById("img");
	if (element.src.match("phone")) {
		element.src="location.png";
	}
	else{
		element.src="phone.png";
	}
}

function bianliang() {
	var pi=3.14; 
	var name="liaun";
	var answer="yes";
	document.write(pi)
}



function shuzu() {
	var person={
       firstname : "Bill",
       lastname  : "Gates",
       id        :  5566
     };


   demo=document.getElementById("demo2");
   document.write(person.id)
}


function chuancan(name,hight) {
	document.write(name+"wenben"+returntext(123,321))
}


function returntext(aa,bb) {

	return aa*bb;

}



