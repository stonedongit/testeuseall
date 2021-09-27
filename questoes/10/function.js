var a = ["Thomas","Teste","Thomas"];
var b = ["Useall","Teste","Javascript"];

function existemDuplicados(array) {
    return (new Set(array)).size !== array.length;
}

hasDuplicates(a); //true
hasDuplicates(b); //false