
function Demo() : string[]
{
    var Language : string[] = ["C","Java","Paython","Typescript"];
    return Language;
}

var Arr : string[];
Arr = Demo();

console.log("Element of Array are :");
var i : number = 0;

for(i = 0; i < Arr.length; i++)
{
    console.log(Arr[i]);
}


