function entreNumeros (num1, num2){
    var min;
    var max;
    if (num1<num2){
        min = num1;
        max = num2;
    }
    else{
        min = num2;
        max = num1;
    }
    while (min <= max){
    console.log(min);
    min++;
    }
}
