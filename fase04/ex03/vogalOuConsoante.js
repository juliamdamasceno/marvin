function vogalOuConsoante (letra){
    if (letra == a || e || i || o || u){
        return ("Vogal");
    } else {
        return ("Consoante");
    }
}
console.log(vogalOuConsoante("i"));