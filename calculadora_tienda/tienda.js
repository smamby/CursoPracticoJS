function calcularDescuento(precio, descuentoPorciento){
    var precioConDescuento = (100 - descuentoPorciento) * precio / 100;
    return precioConDescuento;
} 

function aplDescuento(){
    const precio = document.getElementById("precio");
    const precioValue = precio.value;
    const descuentoPorciento = document.getElementById("descuento");
    const descuentoValue = descuentoPorciento.value;
    const descuentoAplicado = calcularDescuento(precioValue, descuentoValue);    
    const imprimir = document.getElementById("imp");
    imprimir.innerText = "El precio con descuento es "+descuentoAplicado;
};

var listaCupones = [];

var cuponesExistentes = []

const armarCupon = (cuponValue,descuentoValue) => {
    var inputCupon = document.getElementById("inputCupon");
    var cuponValue = parseInt(inputCupon.value);
    var descuentoPorciento = document.getElementById("descuento");
    var descuentoValue = parseInt(descuentoPorciento.value);
    var nuevoCupon = {numero:cuponValue , descuento:descuentoValue};
    const imprimir = document.getElementById("imp");    
    const insertar = () => {        
        console.log(`El cupon es ${nuevoCupon.numero}`
                    +` numero ${nuevoCupon.descuento}`);        
        if (cuponesExistentes.includes(nuevoCupon.numero)===true){
            imprimir.innerText = "el cupon ya existe";
            console.log('el cupon ya existe');
        } else if (nuevoCupon.numero == undefined 
            || nuevoCupon.descuento == undefined
            || isNaN(nuevoCupon.numero)
            || isNaN(nuevoCupon.descuento))    {
            imprimir.innerText = "Inserte un cupon";
        } else if (cuponesExistentes.includes(nuevoCupon.numero)===false){
            listaCupones.push(nuevoCupon);
            cuponesExistentes.push(nuevoCupon.numero);
            imprimir.innerText = "el cupon creado es el numero "
                        +nuevoCupon.numero
                        +" con un descuento del "
                        +nuevoCupon.descuento+"%";
            console.log(listaCupones);                    
        };
        console.log(`Lista de Cupones: ${cuponesExistentes}`);  
        document.getElementById("inputCupon").value = "";    
        document.getElementById("descuento").value = "";     
    };
    return insertar(); 
    
};

function aplicarCupon(){
    console.log(cuponesExistentes);
    var numeroCupon = parseInt(document.getElementById("inputCupon").value);    
    console.log(cuponesExistentes.includes(numeroCupon))
    if (cuponesExistentes.includes(numeroCupon)===true){
        console.log(numeroCupon);
        var cuponEncontrado;
        const buscar = listaCupones.forEach(cupon => {
            if(cupon.numero === numeroCupon) {
                console.log(cupon);
                cuponEncontrado = cupon;                
            };
            return cupon;
        });
        console.log(cuponEncontrado);
        const precio = document.getElementById("precio");
        const precioValue = precio.value;
        const descuentoAplicado = calcularDescuento(precioValue, cuponEncontrado.descuento);
        const imprimir = document.getElementById("imp");
        imprimir.innerText = "El precio con descuento es "+descuentoAplicado;
        const index = listaCupones.findIndex((cupon) => cupon.numero === cuponEncontrado.numero);
        listaCupones.splice(index,1);
        cuponesExistentes.splice(index,1);        
    };
    console.log(listaCupones);
    console.log(cuponesExistentes);
}



