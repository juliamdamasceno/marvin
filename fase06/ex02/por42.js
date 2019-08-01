function por42(num1,num2) {
    var min, max;
    var multiplo = 0;
    if (num1 < num2) {
        min = num1;
        max = num2;
    }
    else {
        min = num2;
        max = num1;
    }
    while (min <= max){
        if (min % 42 === 0) {
        multiplo++
        }
        if (multiplo == 2){
            return min
        }
        min++
    }
    console.log ("Não encontrado");
    return false; 
}
    