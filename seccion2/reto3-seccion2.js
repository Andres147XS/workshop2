//clima, el espacio disponible en su maleta, y el peso total permitido

let weather = prompt(
  "Ingrese el clima actual soleado/lluvioso: "
).toLowerCase();

if (weather == "soleado") {
  alert("Puedes empacar pantalonetas, playeras y tenis");
}
if (weather == "lluvioso") {
  alert("Puedes empacar sombrilla y chaqueta");
}

let articles = Number(
  prompt("Ingrese articulos que desee agregar a la maleta (maximo 3): ")
);

if (articles > 3) {
  alert("Ha excedido el total de espacio");
} else {
  let weight = prompt("Ingrese el peso total permitido: ");

  let articleOne = Number(prompt("Ingrese el peso del primer articulo: "));
  let articleTwo = Number(prompt("Ingrese el peso del segundo articulo: "));
  let articleThree = Number(prompt("Ingrese el peso del tercer articulo: "));

  let totalWeightArticles = articleOne + articleTwo + articleThree;

  if(totalWeightArticles < weight){
      alert("Puedes agregar otro articulo que pese "+(weight-totalWeightArticles)+" Kilos o menos")
  }

  if (articleOne + articleTwo + articleThree > weight) {
    alert("Ha excedido el peso total permitido, aun no puede viajar. Procure que sean articulos importantes");
  }
  if (articleOne + articleTwo + articleThree <= weight) {
    alert("Perfecto el peso actual está permitido puede viajar.");
  }
}