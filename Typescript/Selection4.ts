function DisplayTime(Division : string) : void
{
    switch(Division)
    {
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
var Value : string = "C";
DisplayTime(Value);