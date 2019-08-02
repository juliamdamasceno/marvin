function primo (num1){
    var i = 2
    if (num1 <= 1) {
        return "Não";
    }
    while (i < num1){    
    if (num1 % i === 0){
        return "Não";
    }
    else {
        return "Sim";
    }
        i++
    }
}

console.log(primo(9));
