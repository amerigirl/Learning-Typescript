var smallerNumber: number = 10;
var largerNumber: number = 20;
var lastNumber: number = 30;

if (smallerNumber > largerNumber && smallerNumber > lastNumber){
    console.log("SmallerNumber is greater");

} else if (largerNumber > smallerNumber && largerNumber > lastNumber) {
    console.log("LargerNumber is greater");

} else if (lastNumber > smallerNumber && lastNumber > largerNumber){
    console.log("last number is greater");
} else {
    console.log("numbers are equal");
}