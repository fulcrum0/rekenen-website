const sbmt = document.getElementById("sbmt1");
const sbmt2 = document.getElementById("sbmt2");
const sbmt3 = document.getElementById("sbmt3");
const inputPr = document.getElementById("inputPr");
const inputPr1 = document.getElementById("inputPr1");
const inputPr2 = document.getElementById("inputPr2");
const inputPr3 = document.getElementById("inputPr3");
const inputPr4 = document.getElementById("inputPr4");
const inputPr5 = document.getElementById("inputPr5");
const resultPr = document.getElementById("resultPr");
const resultPr1 = document.getElementById("resultPr1");
const resultPr2 = document.getElementById("resultPr2");

sbmt.onclick = function (event) {
    event.preventDefault();
    resultPr.value = (parseFloat(inputPr.value) / 100) * parseFloat(inputPr1.value);
}

sbmt2.onclick = function (event) {
    event.preventDefault();
    resultPr1.value = (parseFloat(inputPr2.value) / parseFloat(inputPr3.value)) * 100;
}

sbmt3.onclick = function (event) {
    event.preventDefault();
    resultPr2.value = ((parseFloat(inputPr5.value) - parseFloat(inputPr4.value)) / parseFloat(inputPr4.value)) * 100;
}
