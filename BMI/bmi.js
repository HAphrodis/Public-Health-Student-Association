let result = document.getElementById("result");
let meaning = document.getElementById("meaning");
const button = document.getElementById("button");

button.addEventListener("click", function() {
  const height = document.getElementById("height");
const weight = document.getElementById("weight");
  let num = weight.value / Math.round(height.value * height.value) * 10000;
  result.innerText = num.toFixed(2);
  
  if(height.value == 0 || weight.value == 0) {
    meaning.innerText = "Please enter your input";
  } else if(num < 18.4) {
    meaning.innerText = "Underweight";
    meaning.style.color = "red";
  } else if (num > 18.5 && num < 24.9) {
    meaning.innerText = "Normal";
    meaning.style.color = "white";
  } else if (num > 25 && num < 39.9) {
    meaning.innerText = "Overweight";
    meaning.style.color = "Red";
  } else {
    meaning.innerText = "Obese";
    meaning.style.color = "red";
  }
})

