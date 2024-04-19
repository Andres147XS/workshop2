let dailyBudget = Number(prompt("Ingrese su presupuesto de hoy: "));
let eatingOut = Number(
  prompt("Ingrese lo que se gastara comiendo por fuera: ")
);
let buyBooks = Number(prompt("Ingrese lo que gastara en libros: "));

let saving = Number(prompt("Ingrese la cantidad que desea ahorrar por día: "));

let totalExpenses = eatingOut + buyBooks;
let costOverrun = totalExpenses - dailyBudget;
let difference = dailyBudget - totalExpenses;

if (dailyBudget < totalExpenses) {
  alert(
    "Usted se excedio en los gastos en: " +
      costOverrun +
      " pesos, no le da para ahorrar los: " +
      saving +
      " pesos indicados"
  );
} else {
  if (dailyBudget > totalExpenses && saving <= difference) {
    alert(
      "Felicitaciones le sobran: " +
        difference +
        " pesos lo cual le permite ahorrar los: " +
        saving +
        " pesos indicados"
    );
  } else {
    if (dailyBudget == totalExpenses) {
      alert(
        "El presupuesto y los gastos son iguales debe desistir de una de las 2 compras para poder ahorrar"
      );

      if (saving == eatingOut){
        alert("Debes desistir de la comida");
      }
      if (saving == buyBooks) {
        alert("Debes desistir de los libros");
      }
      if (saving > buyBooks) {
        alert("Debe desistir de la comida y le sobran: "+(eatingOut-saving)+" pesos");
      }
      if (saving > eatingOut){
        alert("Debe desistir de los libros y le sobran: "+(buyBooks-saving)+" pesos");
      }
    }
  }
}

let wish = prompt("Ingrese que actividad desea priorizar hoy:");

if(wish == "comida"){
    alert("debes prescindir de los libros y de ahorrar");
}else{
    alert("debes prescindir de la comida y de ahorrar")
}

