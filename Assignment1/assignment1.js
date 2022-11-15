var data = prompt("Please enter a number between 1 and 100");
console.log(data);
var newData = Number(data); //converts string to a number
if (newData >= 1 && newData < 101 === false) {
    console.log("You did not choose a number in the appropriate range!");
}
if (newData >= 1 && newData < 101) {
    if (newData % 2 === 0) {
        console.log("The number you chose is even");
    }
    else if (newData % 2 !== 0) {
        console.log("The number you chose is odd");
    }
    else {
        console.log("You did not choose a number in the appropriate range!");
    }
}
