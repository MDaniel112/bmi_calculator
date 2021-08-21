function bmiCalculator(weight, height) {
  var bmi = weight/Math.pow(height, 2);
  bmi = bmi * 10000;
  bmi = Math.round(bmi * 100) / 100
  return bmi;
}

function getInputValues() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var bmi = bmiCalculator(weight, height);

  document.getElementById("bmiResult").innerHTML ="Your resulr: " + bmi;
}
