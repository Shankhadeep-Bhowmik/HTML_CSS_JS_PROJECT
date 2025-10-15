let output = document.getElementById('output');
let expression = '';
function addToDisplay(key){
  expression += key;
  output.value = expression;
}
function clearDisplay() {
  expression = "";
  output.value = expression;
}
function calculate(){
  let result = eval(expression);
  output.value = result;
}


