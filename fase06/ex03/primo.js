function primo (num1){
    var i = 2
    var primo = false
    if (num1==2) {
        primo = true;
        return "Sim"
    }
   
    while (i < num1){    
    if (num1 % i === 0){
        primo = false;
        break;
        }else{
        primo = true;
       i++
    }
    }
    if (primo){
        return "Sim";
    }else{
        return "Não";
    }
}

