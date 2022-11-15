//enums are constant variables 
enum Gender1{

    Male,
    Female,
    NonBinary
}

console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender.NonBinary);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);

//assigns an enum whatever index you want!
enum WeekEnds{

    Saturday = 6,
    Sunday = 7,

}
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);