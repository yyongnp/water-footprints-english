var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var outputimg2 = document.getElementById("clothimg2");

myRange2.oninput = function() {
  output2.innerHTML = this.value;
  return x = +this.value;
}


output2.innerHTML = slider2.value;

slider2.oninput = function() {
output2.innerHTML = this.value;
outputimg2.src = 'cl'+this.value+'.svg';
if(slider2.value == 0){
  output2.innerHTML = '7';
} else if (slider2.value == 1){
    output2.innerHTML = '10';
} else if (slider2.value == 2){
    output2.innerHTML = '14';
} else if (slider2.value == 3){
    output2.innerHTML = '18';
} else if (slider2.value == 4){
    output2.innerHTML = '20';
}else if (slider2.value == 5){
    output2.innerHTML = '22';
}else if (slider2.value == 6){
    output2.innerHTML = '24';
}
}
