
var CBR, H1, H3, E1, E2;
var outputText;
var DBM_cost, CTB_cost;

function evaluate() {
  CBR = document.forms["Input_Form"]["CBR value"].value;
  H1 = document.forms["Input_Form"]["H1 value"].value;
  H3 = document.forms["Input_Form"]["H3 value"].value;
  E1 = document.forms["Input_Form"]["E1 value"].value;

  if (CBR < 0) {
    outputText = "CBR cannot be negative";
  }
  else if (H1 < 0) {
    outputText = "H1 cannot be negative";
  }
  else if (H3 < 0) {
    outputText = "H3 cannot be negative";
  }
  else if (E1 < 0) {
    outputText = "E1 cannot be negative";
  }
  else {
    var Tensile_Strain = document.getElementById("Coefficient 1").value - document.getElementById("Coefficient 2").value * CBR - document.getElementById("Coefficient 3").value * H3 - document.getElementById("Coefficient 5").value * H1 - document.getElementById("Coefficient 6").value * E1;
    automateSpeedGauge(Tensile_Strain);
    outputText = "The value of Tensile strain for given value of <b>CBR, H1, H3, E1</b> and <b>E2</b> is: <strong>" + Tensile_Strain + " Microstrain";
  }

  document.getElementById("output_text").innerHTML = outputText;
}

function automateSpeedGauge(s) {
  const value = s;
  setInterval(function () {
    $(".gauge-speed").attr("data-value", value);
    $(".gauge-gps-speed").attr("data-value", value);
  }, 500);
}

function changeC1() {
  var c1Value = document.getElementById("Coefficient 1").value;
  document.getElementById("c1").innerHTML = c1Value;
}
function changeCBRco() {
  var c2Value = document.getElementById("Coefficient 2").value;
  document.getElementById("c2").innerHTML = c2Value;
}
function changeH3co() {
  var c3Value = document.getElementById("Coefficient 3").value;
  document.getElementById("c3").innerHTML = c3Value;
}
function changeH1co() {
  var c5Value = document.getElementById("Coefficient 5").value;
  document.getElementById("c5").innerHTML = c5Value;
}
function changeE1co() {
  var c6Value = document.getElementById("Coefficient 6").value;
  document.getElementById("c6").innerHTML = c6Value;
}

function changeC1C() {
  var c1Value = document.getElementById("Coefficient 1C").value;
  document.getElementById("c1C").innerHTML = c1Value;
}
function changeCBRcoC() {
  var c2Value = document.getElementById("Coefficient 2C").value;
  document.getElementById("c2C").innerHTML = c2Value;
}
function changeH3coC() {
  var c3Value = document.getElementById("Coefficient 3C").value;
  document.getElementById("c3C").innerHTML = c3Value;
}
function changeH1coC() {
  var c5Value = document.getElementById("Coefficient 5C").value;
  document.getElementById("c5C").innerHTML = c5Value;
}
function changeE1coC() {
  var c6Value = document.getElementById("Coefficient 6C").value;
  document.getElementById("c6C").innerHTML = c6Value;
}

// script  for CBR
function copyCBR() {
  var text1 = true ? document.getElementById("1").value : '';
  document.getElementById("TextBoxForCBR").value = text1;
}

function coopyCBR() {
  var text1 = true ? document.getElementById("TextBoxForCBR").value : '';
  document.getElementById("1").value = text1;

}

var slider = document.getElementById("1");
var output = document.getElementById("CBR");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

function myFunctionForCBR() {
  var Inputvalue = document.getElementById("TextBoxForCBR").value;
  document.getElementById("CBR").innerHTML = Inputvalue;
}


// script  for H1
function copyH1() {
  var text2 = true ? document.getElementById("2").value : '';
  document.getElementById("TextBoxForH1").value = text2;
}

function coopyH1() {
  var text2 = true ? document.getElementById("TextBoxForH1").value : '';
  document.getElementById("2").value = text2;

}

var sliderH1 = document.getElementById("2");
var outputH1 = document.getElementById("H1");
outputH1.innerHTML = sliderH1.value;

sliderH1.oninput = function () {
  outputH1.innerHTML = this.value;
}

function myFunctionForH1() {
  var InputvalueH1 = document.getElementById("TextBoxForH1").value;
  document.getElementById("H1").innerHTML = InputvalueH1;
}


// script  for H3
function copyH3() {
  var text3 = true ? document.getElementById("3").value : '';
  document.getElementById("TextBoxForH3").value = text3;
}

function coopyH3() {
  var text3 = true ? document.getElementById("TextBoxForH3").value : '';
  document.getElementById("3").value = text3;

}

var sliderH3 = document.getElementById("3");
var outputH3 = document.getElementById("H3");
outputH3.innerHTML = sliderH3.value;

sliderH3.oninput = function () {
  outputH3.innerHTML = this.value;
}

function myFunctionForH3() {
  var InputvalueH3 = document.getElementById("TextBoxForH3").value;
  document.getElementById("H3").innerHTML = InputvalueH3;
}



// script  for E1
function copyE1() {
  var text4 = true ? document.getElementById("4").value : '';
  document.getElementById("TextBoxForE1").value = text4;
}

function coopyE1() {
  var text4 = true ? document.getElementById("TextBoxForE1").value : '';
  document.getElementById("4").value = text4;

}

var sliderE1 = document.getElementById("4");
var outputE1 = document.getElementById("E1");
outputE1.innerHTML = sliderE1.value;

sliderE1.oninput = function () {
  outputE1.innerHTML = this.value;
}

function myFunctionForE1() {
  var InputvalueE1 = document.getElementById("TextBoxForE1").value;
  document.getElementById("E1").innerHTML = InputvalueE1;
}

// Cost Estimation
function calculateCost() {
  var DBM_cost = document.getElementById("DBM formula").innerHTML = 431250 * H1;
  var CTB_cost = document.getElementById("CTB formula").innerHTML = 52088.4 * H3;
  var Total_cost = 27187500 + DBM_cost + 5670000 + CTB_cost + 9168000;
  document.getElementById("costSummation").innerHTML = "Total Cost per km for 8 Lanes is <strong>" + Total_cost + " ₹";
}