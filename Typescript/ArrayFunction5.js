function Demo() {
    var Language = ["C", "Java", "Paython", "Typescript"];
    return Language;
}
var Arr;
Arr = Demo();
console.log("Element of Array are :");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
