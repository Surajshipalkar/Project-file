
// Function Defination
function Addition(Arr : number[]) : number
{
    var Sum : number = 0;
    var i : number = 0;
    for(i = 0; i < Arr.length; i++)
    {
        Sum = Sum + Arr[i];
    }
    return Sum;
}

var Marks : number[] = [67,89,77,90,88];

//Function Call
var result : number = 0;
result = Addition(Marks);
console.log("Addition is :"+result);