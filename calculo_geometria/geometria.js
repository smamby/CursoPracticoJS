console.group('Rectangulo');
function perimetroRectangulo(){
    var ladoAR = parseInt(document.getElementById("ladoAR").value);
    var ladoBR = parseInt(document.getElementById("ladoBR").value);
    var resPerRect = (ladoAR + ladoBR) * 2;
    var impResFuncRec = document.getElementById("impResFuncRec");
    impResFuncRec.innerHTML = "El perimetro del rectangulo es "+resPerRect+" cm";
}

function areaRectangulo(){
    var ladoAR = parseInt(document.getElementById("ladoAR").value);
    var ladoBR = parseInt(document.getElementById("ladoBR").value);
    var resAreaRect = (ladoAR * ladoBR);
    var impResFuncRec = document.getElementById("impResFuncRec");
    impResFuncRec.innerHTML = "El area del rectangulo es "+resAreaRect+" cm^2";
} 
console.groupEnd();


console.group('Triangulo');
function perimetroTriangulo() {
    var ladoAT = parseInt(document.getElementById("ladoAT").value);
    var ladoBT = parseInt(document.getElementById("ladoBT").value);
    var baseT = parseInt(document.getElementById("baseT").value);
    var resPerTrian = (ladoAT + ladoBT + baseT);
    var impResFuncTrian = document.getElementById("impResFuncTriang");
    impResFuncTrian.innerHTML = "El perimetro del triangulo es "+resPerTrian+" cm";
}

function areaTriangulo() {
    var ladoAT = parseInt(document.getElementById("ladoAT").value);
    var ladoBT = parseInt(document.getElementById("ladoBT").value);
    var baseT = parseInt(document.getElementById("baseT").value);
    var ladoMayor = Math.max(ladoAT,ladoBT,baseT);
    var ladoMenor = Math.min(ladoAT,ladoBT,baseT);
    var ladoMedio = (ladoAT+ladoBT+baseT)-ladoMayor-ladoMenor;
    function esAcutangulo(){
        return ((ladoMayor*ladoMayor) < ((ladoMedio*ladoMedio)+(ladoMenor*ladoMenor)))
    }
    var acutangulo = esAcutangulo();
    var s = (ladoAT + ladoBT + baseT) / 2;
    var altura = 2/baseT * (Math.sqrt(s*(s-ladoAT)*(s-ladoBT)*(s-baseT)))
    var resAreaTrian = (altura * baseT / 2);
    var impResFuncTrian = document.getElementById("impResFuncTriang");
    function calcular(){
        if (acutangulo) {
            impResFuncTrian.innerHTML = "El area del triangulo es "+resAreaTrian+" cm^2";
        } else {
            impResFuncTrian.innerHTML = "El triangulo no es acutangulo, reescribe los lados o aminora el lado mayor con algun numero menor a "+ladoMayor
            +", o agranda alguno, o ambos, de los otros dos lados";
        }
    }
    calcular();    
}
console.groupEnd();


console.group('circulo');
const pi = Math.PI;
function diametroCirculo(){
    var radio = parseFloat(document.getElementById("radio").value);
    return radio * 2;        
}
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    var resPerCirculo = pi * diametro;
    var impResFuncCirculo = document.getElementById("impResFuncCirculo");
    impResFuncCirculo.innerHTML = "El perimetro del rectangulo es "+resPerCirculo+" cm";
}
function areaCirculo (radio) {
    var radio = parseFloat(document.getElementById("radio").value);
    var resAreaCirculo = pi*radio*radio;
    var impResFuncCirculo = document.getElementById("impResFuncCirculo");
    impResFuncCirculo.innerHTML = "El perimetro del rectangulo es "+resAreaCirculo+" cm^2";
}
console.groupEnd();