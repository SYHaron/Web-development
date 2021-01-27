let output = document.getElementById("rkm_smallScherm");
// let getal1 = (document.getElementById("number1"));
// let getal2 = (document.getElementById("number2"));

// console.log(getal1);
// console.log(getal2);

// = teken, calculatie, output
function b_calc() {
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
    // document.getElementById("rmk_smallScherm").innerText = plus;

    // let minus = eval( parseInt(currentNr1) - parseInt(currentNr2));
    // console.log(minus);
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



// //getallen knoppen // per cijfer een knop
// function b_cijfer(waarde){
//     console.log(waarde.innerText);
// }


