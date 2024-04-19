let weather = confirm("Indique como está el clima (Aceptar:soleado/Cancelar:lluvioso): ")

let mood = confirm("Indique como esta su estado de ánimo (Aceptar:Excelente/Cancelar:Pesimo): ")

if(weather == true && mood == true){
    alert("Animo, puedes salir a caminar");
}else{
    if (weather == false && mood == false){
        alert("Puedes dormir un poco");
    }else{
        if(weather == false && mood == true){
            alert("Puedes aprovechar a trabajar en este momento");
        }else{
            if(weather == true && mood == false)
            alert("Guarda reposo");
        }
    }
}