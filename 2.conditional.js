// Check if input variable is number or not

const inp = "123";
const num = Number(inp);

if (!isNaN(num)) {
  console.log(`${inp} is a number.`);
} else {
  console.log(`${inp} is not a number.`);
}
