//PROMEDIO o  media aritmetica
const lista1 = [100, 200, 300, 500];
const lista2 = [ 100,30,6,1301,1303,140,1000000,6,100,1303,1303];
const lista4 = [1,2,5,1,4,8,4,9,8,3,3,5,4,6,6,
    8,7,4,5,1,2,4,5,3,3,3,3,3,3,2,1,0,4,1,9,4,0];
//const lista3 = [200,30,4,987,57,776,554,10247,888,903];
const lista5 = [200,230,224,287,257,276,254,247,288,293];
const lista6 = [200,224,287,276,293];
var getCanvas = document.getElementById("canvas");
var lienzo = getCanvas.getContext('2d');

//GRAFICAR EN CANVAS
function dibujarBase(){
    lienzo.strokeStyle="rgb(49, 31, 75)";
    lienzo.stroke()
    lienzo.lineWidth=1;
    lienzo.beginPath();
    lienzo.moveTo(0,130);
    lienzo.lineTo(400,130);
};

var inputArray //= document.getElementById("inputArray");
//document.addEventListener("keydown", arrancar);
// const arr = arrancar();    
// var dataInput = JSON.parse("["+arr+"]");
// var inputArray = JSON.parse("["+arr+"]");
var imprimirResultado = document.getElementById("cajaResultado");


//ARRANQUE
function arrancar(){ 
    if(inputArray!==""){
        inputArray = document.getElementById("inputArray").value;
        dibujarBase();
        //console.log(inputArray);
        return inputArray; 
    }else {
        imprimirResultado.innerHTML = "Inserte los datos";
        inputArray="";
        setTimeout(function(){location.reload(true)},1800);
        
        
    };
};

//DATOS STANDAR DEL DATA INPUT
var maximo;
var minimo;
var freq = {};
var freqAcum = [];
var lisOrdFreqFAcum = [];
var cantidadDeElementos = lisOrdFreqFAcum.length;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var ri = 0;
var valorAtipicoQ1 = 0;
var valorAtipicoQ3 = 0;
var qF1;
var qF2;
var qF3;

const frequency = () => {
    const arr = arrancar();    
    var dataInput = JSON.parse("["+arr+"]");
    const count = {};
    dataInput.map(function(el){
        if(count[el]){
            count[el] += 1;
        } else {
            count[el] = 1;
        };
    });
    //console.log(count);
    lisOrdFreq = Object.entries(count);
    lisOrdFreqFAcum = lisOrdFreq;
    return lisOrdFreq;
};
function lisFreqAcum(){ 
    frequency();
    var freq = frequency().map(function(el){
    return el[1];
    });
    c = 0
    freqAcum = [];
    for(let e of freq){
        c += e;
        freqAcum.push(c);
    };
    //console.log(freqAcum);
    //console.log(freqAcum.length);    
    for (var i=0; i < freqAcum.length; i++){
        lisOrdFreqFAcum[i].push(freqAcum[i]);   
        lisOrdFreqFAcum[i][0] = parseInt(lisOrdFreqFAcum[i][0])     
    };    
    return lisOrdFreqFAcum;
};
var lista7 = [13,11,11,32,13,32,11,34,13,17,23,11,22,13,22,13,23,5,17,11
,13,13,4,17,4,32,11,17,22,11,13,32,11,13,11,17,22,11,11,17,11,22,37,39]
var lista3 = [200,30,4,987,57,776,554,1247,888,903];
var lista8 = [200,30,4,97,57,776,554,1247,88,93,56,124,135,224,155]

var qX;
var qFx; 

function quart(q){               
    if(freqAcum.includes(q)){
        q = q; 
        console.log(q);
        qX = freqAcum.indexOf(q); 
        console.log(qX); 
        console.log(lisOrdFreqFAcum[qX][0]);
        qFx = lisOrdFreqFAcum[qX][0];
        return qFx;
    } else {
        q = q+1;
        return quart(q);
    };        
};
function quartians(){
    lisFreqAcum();    
    q1 = Math.ceil((1 * lisOrdFreqFAcum[lisOrdFreqFAcum.length-1][2]) / 4);
    q2 = Math.ceil((2 * lisOrdFreqFAcum[lisOrdFreqFAcum.length-1][2]) / 4);
    q3 = Math.ceil((3 * lisOrdFreqFAcum[lisOrdFreqFAcum.length-1][2]) / 4);         
    qF1 = quart(q1);
    qF2 = quart(q2);
    qF3 = quart(q3);
    ri = qF3 - qF2;
    valorAtipicoQ1 = qF1 - (1.5*ri);
    valorAtipicoQ3 = qF3 + (1.5*ri);
    console.log("Freq Acum "+lisOrdFreqFAcum[lisOrdFreqFAcum.length-1][2]);
    console.log("quartian 1 "+qF1);
    console.log("quartian 2 "+qF2);
    console.log("quartian 3 "+qF3);
    console.log("intercuartiles "+ri);
    console.log("Valor atipico Q1 "+valorAtipicoQ1);
    console.log("Valor Atipico Q3 "+valorAtipicoQ3);    
};

//GRAFICAR QUARTILES
function impBase(){
    lienzo.strokeStyle="rgb(200, 31, 75)";
    lienzo.stroke()
    lienzo.lineWidth=1;
    lienzo.beginPath();
    lienzo.moveTo(5,135);
    lienzo.lineTo(5,125);      
    lienzo.moveTo(395,135);
    lienzo.lineTo(395,125);
};    
var rangoMin;
var rangoMax;
var space;
function impQ(){
    quartians();
    rango();
    rangoMin = rango()[0].min;
    rangoMax = rango()[0].max;
    space = parseFloat(390/(rangoMax - rangoMin));
    lienzo.strokeStyle="rgb(200, 31, 75)";
    lienzo.stroke()
    lienzo.lineWidth=2;
    lienzo.beginPath();
    let q1Draw = parseInt((qF1 - rangoMin) * space);
    lienzo.moveTo(5+q1Draw,125);
    lienzo.lineTo(5+q1Draw,135);
    let q2Draw = parseInt((qF2 - rangoMin) * space);
    lienzo.moveTo(5+q2Draw,125);
    lienzo.lineTo(5+q2Draw,135);
    let q3Draw = parseInt((qF3 - rangoMin) * space);
    lienzo.moveTo(5+q3Draw,125);
    lienzo.lineTo(5+q3Draw,135);
};    
var desMedDraw;
var dMDraw;
var mediaDraw;
function impValoresMedios(){
    media()
    desviacionMedia()
    
    mediaDraw = media();
    let medDraw =  parseInt((mediaDraw - rangoMin) * space);
    lienzo.strokeStyle="rgb(255, 0, 0)";
    lienzo.stroke()
    lienzo.lineWidth=2;
    lienzo.beginPath();
    lienzo.moveTo(5+medDraw,110);
    lienzo.lineTo(5+medDraw,145);
    desMedDraw = desviacionMedia();
    dMDraw = parseInt(desMedDraw * space);
    console.log(dMDraw);
    console.log(medDraw-dMDraw);
    console.log(medDraw);
    console.log(medDraw+dMDraw);
    lienzo.moveTo(5+medDraw+dMDraw,120);
    lienzo.lineTo(5+medDraw+dMDraw,140);
    lienzo.moveTo(5+medDraw-dMDraw,120);
    lienzo.lineTo(5+medDraw-dMDraw,140);
};
function graficarQuartiles(){ 
    lienzo.clearRect(0,0,400,200);      
    impBase();
    impQ();
    impValoresMedios();
    impValoresGraf();
} 
function impValoresGraf() {
    imprimirResultado.innerHTML = "Los valores atipicos son "
                        +valorAtipicoQ1+" y "+valorAtipicoQ3
                        +". El rango min: "+minimo+", max: "+maximo
                        +". Los cuartiles son: "+qF1+", "+qF2+", "+qF3
                        +". La media es "+media()
                        +". la desviacion media es "+desviacionMedia()
                        +" dando L.inf="+(mediaDraw-desMedDraw)
                        +" y L.sup.="+(mediaDraw+desMedDraw);
}

//MEDIANA
//const mitadLista2 = parseInt(lista2.length / 2);
function esPar (numero) {
    if (numero%2 === 0) {
        return true;
    } else {
        return false;
    };
};

//medianaDeUnaLista(lista2)
//ejercicioadicional sort
const age = [
    {name: 'pepa', edad: 6},
    {name: 'jose', edad: 36},
    {name:'juana', edad: 24},    
]

function ordenaPorPropiedadDeObjetoName(a,b){ //los if ya son automaticos para numeros    
    if(a.name > b.name){              // solo tengo que especificar
        return 1;           // a- b orden ascendente
    }                       // b - a orden descendente
    if(a.name < b.name){              // segn el resultado -1, 0 , 1 interpreta los if
        return -1;          //pongo los if para objetos
    }
    return 0;
}
function ordenaPorPropiedadDeObjetoEdad(a,b){    
    if(a.edad > b.edad){    // funcion de comparacion
        return 1;           // puedo crear varias diferentes
    }                       // y usar la necesaria en cada caso
    if(a.edad < b.edad){    // por ejemplo dentro de otro funcion
        return -1;          
    }
    return 0;
}
function compararAscendente(a,b){return a-b};
function compararDescendente(a,b){return b-a};

function ordenar(lista){    
    lista.sort(compararDescendente)
    console.log('en orden ascendente: ', lista.join()); 
}       // join convierte array en una cadena de texto que imprimir



//MEDIA
function media() {  
    const arr = arrancar();
    //console.log(arr);
    const input = JSON.parse("["+arr+"]");
    //console.log(input);
    console.log(typeof input[0])   ;  
    const sumaLista = input.reduce((a,b) => a+b);    
    const promedioLista = sumaLista / input.length;    
    //console.log(promedioLista);    
    imprimirResultado.innerHTML = "La media es "+promedioLista;
    return promedioLista;   
};

//MEDIANA
function medianaDeUnaLista() {
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]"); 
    //console.log(input);
    const mitadLista = parseInt(input.length / 2);
    var listaOrdenada = input.sort((a,b)=>a-b); 
    //console.log(listaOrdenada);   
    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioE1yE2 = (elemento1+elemento2)/2;
        var mediana = promedioE1yE2;   
        imprimirResultado.innerHTML = "La mediana es "+mediana;     
        return mediana;
    } else {
        var mediana = listaOrdenada[mitadLista]; 
        imprimirResultado.innerHTML = "La mediana es "+mediana;       
        return mediana;
    };    
};

//MODA
function moda(){
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]");  
    console.log(input);
    const countLista = {};
    input.map(function(elemento){
        if(countLista[elemento]){
            countLista[elemento] += 1;
        } else {
            countLista[elemento] = 1;
        };
    });
    console.log(countLista);
    const listaArray = Object.entries(countLista).sort((a,b)=> a[1]-b[1]);
    console.log(listaArray);
    imprimirResultado.innerHTML = "La moda es "+listaArray[listaArray.length-1][0]
                        +" que se repite "+listaArray[listaArray.length-1][1]+" veces";
    return listaArray[listaArray.length-1]; //con esta hace falta ordenarlo
};
const listaParaProbarModa = [1,1,2,1,66,1,2,66,66,1,4,2,4,5,4,2,1]

//DESVIACION
function desviacion() {
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]");    
    let mediaArit = media(input);
    let arregloDesviacion = [];
    for(var l of input) {
        arregloDesviacion.push(l - mediaArit);        
    };
    console.log('La media aritmetica es: '+mediaArit)
    console.log('La desviacion (datos - media):');
    //console.log(arregloDesviacion);
    imprimirResultado.innerHTML = "La desviacion es ["
                            +arregloDesviacion.join(", ")+"]";
    return arregloDesviacion;
}

//DESVIACION MEDIA => (sumatoria|xi-media|) / n
function desviacionMedia() {
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]"); 
    //let mediaArit = media(lista);
    let sumatoria = [];
    // for(var l of lista) {
    //     sumatoria.push(Math.abs(l - mediaArit));        
    // };
    // console.log('La media aritmetica es: '+mediaArit)
    // console.log('El absoluto de los (datos - media): '+sumatoria);
    var desviacionM = desviacion(input);
    //console.log(desviacionM);
    for(let l of desviacionM){
        sumatoria.push(Math.abs(l));        
    };
    //console.log(sumatoria);
    let sumaTotal = sumatoria.reduce((a,b)=> a+b);
    //console.log(sumaTotal);
    //console.log(sumatoria.length);
    imprimirResultado.innerHTML = `La desviacion media es: ${sumaTotal/sumatoria.length}`;
    return sumaTotal/sumatoria.length;
};


//DESVIACION STANDAR => sqrt{[sumatoria((xi-media)**2)]/2}
function desviacionStandarPoblacion() {
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]");
    let mediaArit = media(input);
    let sumatoria = [];
    var desviacionS = desviacion(input);
    for(var l of desviacionS) {
        sumatoria.push(Math.pow((l),2));        
    };
    console.log('La media aritmetica es: '+mediaArit)
    console.log('El cuadrado de los (datos - media): '+sumatoria);
    let sumaTotal = sumatoria.reduce((a,b)=> a+b);
    //console.log(sumaTotal);
    //console.log(sumatoria.length);
    imprimirResultado.innerHTML = `La desviacion standar para una poblacion: `
                                +`${Math.sqrt(sumaTotal/sumatoria.length)}`;
    return `La desviacion standar para una poblacion: `
            +`${Math.sqrt(sumaTotal/sumatoria.length)}`;
};
function desviacionStandarMuestra() {
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]");
    let mediaArit = media(input);
    let sumatoria = [];
    for(var l of input) {
        sumatoria.push(Math.pow((l - mediaArit),2));        
    };
    console.log('La media aritmetica es: '+mediaArit)
    console.log('El cuadrado de los (datos - media): '+sumatoria);
    let sumaTotal = sumatoria.reduce((a,b)=> a+b);
    console.log(sumaTotal);
    console.log(sumatoria.length);
    imprimirResultado.innerHTML = `La desviacion standar para una poblacion: `
                                +`${Math.sqrt(sumaTotal/sumatoria.length-1)}`;
    return `La desviacion standar para una poblacion: `
            +`${Math.sqrt(sumaTotal/(sumatoria.length-1))}`;
};

//RANGO

function rango(){
    const arr = arrancar();    
    const input = JSON.parse("["+arr+"]");
    maximo = Math.max(...input);
    minimo = Math.min(...input);
    imprimirResultado.innerHTML = "[{min: "+minimo+", max: "+maximo+"}]";
    return [{min: minimo, max: maximo}];
};




//PROMEDIO PONDERADO QUEDA AFUERA DE ESTE PROYECTO
// const neurona = [
//     {"vector": "v1", "valor":10, "ponderacion": 2};
//     {"vector": "v2", "valor":5, "ponderacion": 4};
//     {"vector": "v3", "valor":15, "ponderacion": 1};
//     {"vector": "v4", "valor":8, "ponderacion": 4};
//     {"vector": "v5", "valor":11, "ponderacion": 15};
//     {"vector": "v6", "valor":14, "ponderacion": 2};
//     {"vector": "v7", "valor":5, "ponderacion": 5}
// ];
//  [{"vector": "v1", "valor":10, "ponderacion": 2};{"vector": "v2", "valor":5, "ponderacion": 4};{"vector": "v3", "valor":15, "ponderacion": 1};{"vector": "v4", "valor":8, "ponderacion": 4};{"vector": "v5", "valor":11, "ponderacion": 15};{"vector": "v6", "valor":14, "ponderacion": 2};{"vector": "v7", "valor":5, "ponderacion": 5}]
var valoresPonderados = [];
function valorPonderado(){    
    var arr = arrancar();
    console.log(arr);
    console.log(typeof arr);    
    var input = arr.split(";");
    input = JSON.parse(input);    
    console.log(input);
    console.log(typeof input);    
    valoresPonderados = input.map(function(obj) {
        return obj.valor * obj.ponderacion;
        });    
    console.log(valoresPonderados);
};
var sum1;
function sumatoriaValoresPonderados(){    
    sum1 = valoresPonderados.reduce((a,b)=> a+b); 
    console.log(sum1); 
};
var sum2;
function sumatoriaDePonderaciones(){
    const arr = arrancar();    
    var input = arr.split(";");
    input = JSON.parse(input);
    let list = input.map(function (objeto) {
        return objeto.ponderacion;
    });
    sum2 = list.reduce((a,b)=>a+b);
    console.log(sum2);
};
function promedioPonderado(){
    var imprimirResultado = document.getElementById("cajaResultado");
    imprimirResultado.innerHTML = "expresa el objeto de esta manera:<br>"
        +'[{"vector": "v1", "valor":10, "ponderacion": 2};{"vector": "v2", "valor":19, "ponderacion": 5}]';
    const arr = arrancar();    
    var input = arr.split(";");
    input = JSON.parse(input);
    valorPonderado(input);
    sumatoriaValoresPonderados(valoresPonderados);
    sumatoriaDePonderaciones(input);    
    var result = sum1/sum2;
    console.log(result);
    imprimirResultado.innerHTML = "El promedio ponderado es: "+result;    
};