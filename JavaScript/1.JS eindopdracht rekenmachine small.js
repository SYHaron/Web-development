let output = document.getElementById("rkm_smallScherm");
// let getal1 = (document.getElementById("number1"));
// let getal2 = (document.getElementById("number2"));

// console.log(getal1);
// console.log(getal2);


// = teken, calculatie, output
function b_operator_ac() {
    // let getal1 = (document.getElementById("number1"));
    // let getal2 = (document.getElementById("number2"));

    // let currentNr1 = getal1.value;
    // let currentNr2 = getal2.value;

    let ac = "not defined."
    // let ac = eval(parseFloat(currentNr1) * parseFloat(currentNr2));
    console.log(ac);
    document.getElementById("rkm_smallScherm").innerHTML = ac;
}
function b_operator_plusMin() {
    // let getal1 = (document.getElementById("number1"));
    // let getal2 = (document.getElementById("number2"));

    // let currentNr1 = getal1.value;
    // let currentNr2 = getal2.value;


    // let plusMin = eval(parseFloat(currentNr1) + parseFloat(currentNr2));
    let plusMinExtra = "not defined."
    console.log(plusMinExtra);
    document.getElementById("rkm_smallScherm").innerHTML = plusMinExtra;
}
function b_operator_modulo() {
    let getal1 = (document.getElementById("number1"));
    let getal2 = (document.getElementById("number2"));

    let currentNr1 = getal1.value;
    let currentNr2 = getal2.value;

    //12 % remainder modulo 5 = 2 // check if correct.
    let modulo = eval(parseFloat(currentNr1) % parseFloat(currentNr2));
    console.log(modulo);
    document.getElementById("rkm_smallScherm").innerHTML = modulo;
}
function b_operator_divided() {
    let getal1 = (document.getElementById("number1"));
    let getal2 = (document.getElementById("number2"));

    let currentNr1 = getal1.value;
    let currentNr2 = getal2.value;

    //12 % remainder modulo 5 = 2 // check if correct.
    let divided = eval(parseFloat(currentNr1) / parseFloat(currentNr2));
    console.log(divided);
    document.getElementById("rkm_smallScherm").innerHTML = divided;
}
function b_operator_multiply() {
    let getal1 = (document.getElementById("number1"));
    let getal2 = (document.getElementById("number2"));

    let currentNr1 = getal1.value;
    let currentNr2 = getal2.value;


    let multiply = eval(parseFloat(currentNr1) * parseFloat(currentNr2));
    console.log(multiply);
    document.getElementById("rkm_smallScherm").innerHTML = multiply;
}


function b_operator_plus() {
    let getal1 = (document.getElementById("number1"));
    let getal2 = (document.getElementById("number2"));

    // let defaultNr1 = getal1.defaultValue;
    let currentNr1 = getal1.value;

    // let defaultNr2 = getal2.defaultValue;
    let currentNr2 = getal2.value;

    // console.log(defaultNr1);
    // console.log(currentNr1);
    //  console.log(defaultNr2);
    // console.log(currentNr2);

    let plus = eval(parseFloat(currentNr1) + parseFloat(currentNr2));
    console.log(plus);
    document.getElementById("rkm_smallScherm").innerHTML = plus;
    // let minus = eval( parseInt(currentNr1) - parseInt(currentNr2));
    // console.log(minus);
}
function b_operator_minus() {
    let getal1 = (document.getElementById("number1"));
    let getal2 = (document.getElementById("number2"));

    let currentNr1 = getal1.value;
    let currentNr2 = getal2.value;


    let minus = eval(parseFloat(currentNr1) - parseFloat(currentNr2));
    console.log(minus);
    document.getElementById("rkm_smallScherm").innerHTML = minus;

}


//nog niet operationeel
function b_operator_decimal(){
    let decimal = "not in use."
    document.getElementById("rkm_smallScherm").innerHTML = decimal;

}
function b_operator_calc(){
    let calc = "not defined."
    document.getElementById("rkm_smallScherm").innerHTML = calc;

}




//speciale knoppen
// function b_ac(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);
// }
// function b_plusMin(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);
// }
// function b_modulo(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);
// }
// function b_multiply(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);
// }
// function b_minus(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);
// }
// function b_plus(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);
// }
// function b_dot(value) {
//     // let plus = getal1 + getal2;
//     console.log(value.innerText);}





///ANDERE rekenmachine OTHER one
// //getallen knoppen // per cijfer een knop
// function b_cijfer(waarde){
//     console.log(waarde.innerText);
// }