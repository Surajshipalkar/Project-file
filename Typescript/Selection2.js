function CheckEven(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var Value = 11;
var Result;
Result = CheckEven(Value);
if (Result == true) {
    console.log("It is Even");
}
else {
    console.log("It is Odd");
}
