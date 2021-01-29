


//getallen knoppen
function sb_cijfer(waarde) {
    console.log(waarde.value);
    // document.getElementById("rkm_scherm").innerHTML = waarde.value;

    document.getElementById("rkm_scherm").innerHTML =
        document.getElementById("rkm_scherm").innerHTML + waarde.value;

}
function sb_operator(waarde){
    console.log(waarde.value);
    // document.getElementById("rkm_scherm").innerHTML = waarde.value;

    document.getElementById("rkm_scherm").innerHTML =
        document.getElementById("rkm_scherm").innerHTML + waarde.value;
}
function sb_operator_ac(waarde){
    waarde.value = "";
    document.getElementById("rkm_scherm").innerHTML = waarde.value;

    // waarde.value = empty string
    // console.log(waarde.value);
}
function sb_operator_equal(){
    //berekend, maar lees als geen cijfer, undefined
    let equal = eval((document.getElementById("rkm_scherm").value));
    console.log(equal);

    //laat op scherm zien , hieronder
    document.getElementById("rkm_scherm").innerHTML = equal;
    console.log(rkm_scherm);
}





// Functions cijfers 1 t/m 9
// function sb_0(){
//     number = 0;
//      console.log(number);
//      document.getElementById("rkm_scherm").innerHTML = number;
//  }
// function sb_1(){
//     number = 1;
//      console.log(number);
//      document.getElementById("rkm_scherm").innerHTML = number;
//  }


