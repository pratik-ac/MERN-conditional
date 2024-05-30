// Find grades for student marks.
//      If the mark is greater than or equal to 90, the grade is “A plus”.
//      If the mark is greater than or equal to 80,the grade is “A”.
//      Grade “B”  from marks greater than equal to 70.
//      “C” for marks greater than equal to 60.
//      “F” for marks  less than 60.

let marks = 58;

if (marks >= 90) {
  console.log("A plus");
} else if (marks >= 80 && marks < 90) {
  console.log("A");
} else if (marks >= 70 && marks < 80) {
  console.log("B");
} else if (marks >= 60 && marks < 70) {
  console.log("C");
} else {
  console.log("F");
}
