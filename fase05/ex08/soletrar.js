function soletrar (array){
    var novaList = [];
    var b = 0;
    while ( b < array.length){
    novaList.push(array.substr(b, 1));
    b++
    }
    return novaList;
}