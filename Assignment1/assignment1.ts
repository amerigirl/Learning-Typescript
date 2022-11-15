

var userInput = prompt("Please enter a number between 1 and 100");

var newData: number = Number(userInput); //converts string to a number

    if(newData >= 1 && newData < 101) { //all of this IS running

      if (newData % 2 === 0 ) {
            alert("The number you chose is even");
    
        } else if (newData % 2 !== 0 ) {
            alert("The number you chose is odd");

        } else {
            alert("You did not choose a number in the appropriate range!");
    }
}

