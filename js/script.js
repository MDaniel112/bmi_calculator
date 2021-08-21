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
  var weight_type;

  if(bmi <= 18.5) weight_type = "Underweight";
  if(bmi >= 18.5 && bmi < 25) weight_type = "Normal";
  if(bmi >= 25 && bmi < 30) weight_type = "Overweight";
  if(bmi >= 30) weight_type = "Obese";

  document.getElementById("bmiResult").innerHTML ="Your result:   " + bmi + " " + weight_type;
}
