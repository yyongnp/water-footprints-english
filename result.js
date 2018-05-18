var result = document.getElementById ('result');
var a = 1, b = 1, c = 1, e = 1, f = 1, g = 1, h = 0;


function cal(){
  var a=+document.getElementById('myRange1').value;

  var b=+document.getElementById('myRange2').value;

  var c=+document.getElementById('myRange3').value;

  z =a+b+c+d+e+f+g+h;
  let resultImg = document.getElementById('resultimg');


  if(z == 6 || z <= 14) {
    // console.log('a');
    resultImg.src = 'result1.svg';
    result.innerHTML = 'You are natural lovers.</br>thanks for save water</br>Please tell your friends</br>how to save world.';
  } else if (z == 15 || z <= 28) {
    // console.log('b');
    resultImg.src = 'result2.svg';
    result.innerHTML = 'You are good girl!!</br>but you can help more by</br>use less water and</br>buy cloth less';
  } else if (z == 29 || z <= 46) {
    // console.log('c');
    resultImg.src = 'result3.svg';
    result.innerHTML = 'Hey! you are extravagent! </br>0.3% of fresh water on earth </br> decrese every year.</br>Can you help us </br>to save water in our world?';
  }
}
