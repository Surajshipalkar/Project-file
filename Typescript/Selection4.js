function DisplayTime(Division) {
    switch (Division) {
        case "A":
            {
                console.log("Your exam is at 7 Am");
                break;
            }
        case "B":
            {
                console.log("Your exam is at 8 Am");
                break;
            }
        case "C":
            {
                console.log("Your exam is at 9 Am");
                break;
            }
        case "D":
            {
                console.log("Your exam is at 10 Am");
                break;
            }
        default:
            {
                console.log("Wrong Input,It should be either A,B,C,D");
            }
    }
}
var Value = "C";
DisplayTime(Value);
