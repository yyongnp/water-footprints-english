var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
var outputimg3 = document.getElementById("door");

myRange3.oninput = function() {
  output3.innerHTML = this.value;
  return x = +this.value;
}


output3.innerHTML = '?';
slider3.oninput = function() {
outputimg3.src = 'door'+this.value+'.svg';
if (slider3.value == 1){
    output3.innerHTML = '4-10';
} else if (slider3.value == 2){
    output3.innerHTML = '20-30';
} else if (slider3.value == 3){
    output3.innerHTML = '40';
} else if (slider3.value == 4){
    output3.innerHTML = '60';
}



}
