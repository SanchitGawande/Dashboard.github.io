
var CBR, H1, H2, E1, E2;
var outputText, outputTextC;
var DBM_cost, GSB_cost;

function evaluate() {
  CBR = document.forms["Input_Form"]["CBR value"].value;
  H1 = document.forms["Input_Form"]["H1 value"].value;
  H2 = document.forms["Input_Form"]["H2 value"].value;
  E1 = document.forms["Input_Form"]["E1 value"].value;

  if (CBR < 0) {
    outputText = "CBR cannot be negative";
  }
  else if (H1 < 0) {
    outputText = "H1 cannot be negative";
  }
  else if (H2 < 0) {
    outputText = "H2 cannot be negative";
  }
  else if (E1 < 0) {
    outputText = "E1 cannot be negative";
  }
  else {
    var Tensile_Strain = document.getElementById("Coefficient 1").value - document.getElementById("Coefficient 2").value * CBR - document.getElementById("Coefficient 3").value * H2 - document.getElementById("Coefficient 5").value * H1 - document.getElementById("Coefficient 6").value * E1;
    automateSpeedGauge(Math.round(Tensile_Strain));
    outputText = "The value of Tensile strain for given value of <b>CBR, H1, H2, E1</b> and <b>E2</b> is: <strong>" + Math.round(Tensile_Strain) + " Microstrain";


    var Compressive_Strain = document.getElementById("Coefficient 1C").value - document.getElementById("Coefficient 2C").value * CBR - document.getElementById("Coefficient 3C").value * H2 - document.getElementById("Coefficient 5C").value * H1 - document.getElementById("Coefficient 6C").value * E1;
    automateSpeedGaugeC(Math.round(Compressive_Strain));
    outputTextC = "The value of Compressive Strain for given value of <b>CBR, H1, H2, E1</b> and <b>E2</b> is: <strong>" + Math.round(Compressive_Strain) + " Microstrain";
  }

  document.getElementById("output_text").innerHTML = outputText;
  document.getElementById("output_textC").innerHTML = outputTextC;

}

function automateSpeedGauge(s) {
  const value = s;
  setInterval(function () {
    $(".gauge-speed").attr("data-value", value);
    $(".gauge-gps-speed").attr("data-value", value);
  }, 500);
}
function automateSpeedGaugeC(cs) {
  const value2 = cs;
  setInterval(function () {
    $(".gauge-speedC").attr("data-value", value2);
    $(".gauge-gps-speed").attr("data-value", value2);
  }, 400);
}

function changeC1() {
  var c1Value = document.getElementById("Coefficient 1").value;
  document.getElementById("c1").innerHTML = c1Value;
}
function changeCBRco() {
  var c2Value = document.getElementById("Coefficient 2").value;
  document.getElementById("c2").innerHTML = c2Value;
}
function changeH2co() {
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
function changeH2coC() {
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


// script  for H2
function copyH2() {
  var text3 = true ? document.getElementById("3").value : '';
  document.getElementById("TextBoxForH2").value = text3;
}

function coopyH2() {
  var text3 = true ? document.getElementById("TextBoxForH2").value : '';
  document.getElementById("3").value = text3;

}

var sliderH2 = document.getElementById("3");
var outputH2 = document.getElementById("H2");
outputH2.innerHTML = sliderH2.value;

sliderH2.oninput = function () {
  outputH2.innerHTML = this.value;
}

function myFunctionForH2() {
  var InputvalueH2 = document.getElementById("TextBoxForH2").value;
  document.getElementById("H2").innerHTML = InputvalueH2;
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
  var DBM_cost = document.getElementById("DBM formula").innerHTML = 431250*H1;
  var GSB_cost = document.getElementById("GSB formula").innerHTML = 45840*(H2-150);
  var Total_cost = 26250000 + DBM_cost + 8505000 + GSB_cost;
  document.getElementById("costSummation").innerHTML = "Total Cost per km for 8 Lanes is <strong>" + Total_cost +" ₹";
}
