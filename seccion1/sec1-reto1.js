

const destiny = prompt("Cual es el destino de llegada: ");

let days = prompt("Establezca la cantidad de días que durará el viaje: ")

let budget = prompt("Indique el presupuesto disponible para el viaje: ")

//valor hotel por día 80.000 pesos

let valueHotel = days * 80000;

// valor comida por día 60.000 pesos

let valueFood = days * 60000;

// valor vuelo ida y vuelta 300.000 pesos

let flyValue = 300.000

let total = valueHotel + valueFood + flyValue;

let remainder = (budget-total);

if (total <= budget) {
  window.alert("Usted tiene el presupuesto suficiente para el viaje: ");
  window.alert("Le sobran: " + (remainder) + " Pesos");
} else {
  window.alert("No cuenta con el presupuesto suficiente intente viajar menos días");
  window.alert("Le faltarían: " + (total - budget) + " Pesos");
}

export {
  remainder
};
