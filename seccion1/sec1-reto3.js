
let budgetAgain = parseInt(prompt("Ingrese nuevamente su presupuesto inicial: "));
const priceTravel = parseInt(prompt("Ingrese su gasto en tiquetes: "));
const priceFood = parseInt(prompt("Ingrese su gasto en comida: "));
const priceHotel = parseInt(prompt("Ingrese su gasto en hospedaje: "));

const totalRemaind = budgetAgain-(priceTravel + priceFood + priceHotel);

if(totalRemaind > budgetAgain){
    alert("Usted no cuenta con presupuesto disponible para hacer otra compra, su presupuesto se sobrepasa en "+totalRemaind+" pesos");
}else{
    alert("Usted cuenta con "+totalRemaind+" pesos de presupuesto para hacer otra compra")
}

if(totalRemaind >= 1000000){
    alert("Puede comprar muchos mas articulos extra")
}else{
    if( totalRemaind < 1000000 && totalRemaind >= 600000){
        alert("Puede comprar articulos extra")
    }else{
        if(totalRemaind < 600000){
            alert("Debe moderarse ya casi se queda sin efectivo")
        }else{
            alert("Usted no puede comprar nada mas en absoluto")
        }
    }
}
