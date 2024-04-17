import { remainder } from "./sec1-reto1";
let Name = [];
let Price = [];
let availability = [];

let option = confirm("Desea ingresar un souvenir? si/no");

while (option) {
  let nameSouvenir = prompt("Ingrese el nombre del souvenir: ");
  let priceSouvenir = prompt("Ingrese el valor del souvenir: ");
  let available = prompt("Ingrese la disponibilidad: ");

  Name.push(nameSouvenir);
  Price.push(priceSouvenir);

  console.log(typeof nameSouvenir, nameSouvenir);
  console.log(typeof priceSouvenir, priceSouvenir);

  if (available == "si") {
    availability.push(true);
    console.log(typeof true);
  } else {
    availability.push(false);
    console.log(typeof false);
  }

  option = confirm("Desea ingresar otro souvenir? si/no");
}

console.log(Name, Price, availability);
