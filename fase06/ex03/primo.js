function primo (num1){
    var i = 2
    if (num1 <= 1) {
        return "N�o";
    }
    while (i < num1){    
    if (num1 % i === 0){
        return "N�o";
    }
    else {
        return "Sim";
    }
        i++
    }
}

console.log(primo(9));
