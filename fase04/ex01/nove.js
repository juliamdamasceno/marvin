function nove (num1){
    var transformar = num1.toString().substr(-1,1);
    if (transformar == 9) {
        return (true);
    }else {
        return (false);  
    }
}