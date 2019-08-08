function somaPares (num1, num2){
    var x = Math.ceil(num1);
    var y = Math.floor(num2);
    var nMe, nMa;
    var total = 0
    
     if (x < y){
        nMe = x;
        nMa = y;
    }
    else{
        nMe= y;
        nMa = x;
    }
    while (nMe <= nMa){
    if (nMe % 2 === 0){
        total = nMe;
    }
    nMe++
    }
    return total
} 