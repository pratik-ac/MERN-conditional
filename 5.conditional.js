// Perform arithmetic operation based on the option provided. Set two variables with numbers.
// Create another variable called “option” which can be add/subtract/multiply/divide/power.
// Based upon the value of the option. Perform appropriate operation.
// e.g. if option is “add”, perform num1+num2

const num1 = 5;
const num2 = 10;
const option = "multiply";

switch (option) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "power":
    console.log(num1 ** num2);
    break;
  default:
    console.log("Invalid option");
    break;
}
