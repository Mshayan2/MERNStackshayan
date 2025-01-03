// for loop
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
    
// }
// now in while loop
// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
    
// }
// now in do while loop
// let i = 1;
// do{
//     console.log(i);
//     i++;
    
// } while (i <= 100);


// now if else statement and switchcase

let marks =95;
let grade = prompt("Enter your marks");
if (marks >=90) {
    grade = "A+";
} else if (marks >=80 && marks <90) {
    grade = "A";
} else if (marks >=70 && marks <80) {
    grade = "B";
} else if (marks >=60 && marks <70) {
    grade = "C";
} else if (marks >=50 && marks <60) {
    grade = "D";
} else {  
    grade = "F";
}
console.log(`Your grade is ${grade}`);

// use switch to add message


switch (grade) {
    case "A+":
        console.log("Excellent");
        break;
    case "A":
        console.log("Good");
        break;
    case "B":
        console.log("Average");
        break;
    case "C":
        console.log("Poor");
        break;
    case "D":
        console.log("Very Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid Grade");
        break;
}
        