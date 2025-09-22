function q1() {
  const now = new Date();
  alert("Current date & time:\n" + now);
}

// function q2() {
//   const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//   const now = new Date();
//   alert("Current month: " + months[now.getMonth()]);
// }

// function q3() {
//   const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//   const now = new Date();
//   alert("Today is: " + days[now.getDay()]);
// }

// function q4() {
//   const now = new Date();
//   const d = now.getDay();
//   if (d === 0 || d === 6) {
//     alert("It's Fun day");
//   } else {
//     alert("Not fun day");
//   }
// }

// function q5() {
//   const date = new Date().getDate();
//   alert(date < 16 ? "First fifteen days of the month" : "Last days of the month");
// }

// function q6() {
//   const minutes = Math.floor(Date.now() / (1000 * 60));
//   alert("Minutes since Jan 1, 1970: " + minutes);
// }

// function q7() {
//   const hrs = new Date().getHours();
//   alert(hrs < 12 ? "It's AM" : "It's PM");
// }

// function q8() {
//   const laterDate = new Date(2020, 11, 31); // Dec 31, 2020
//   alert("Later date: " + laterDate);
// }

// function q9() {
//   const ramadanStart = new Date(2015, 5, 18);
//   const diffMs = Date.now() - ramadanStart.getTime();
//   const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//   alert("Days since 1st Ramadan (June 18, 2015): " + days);
// }

// // Q10 — Seconds elapsed since Jan 1, 2015
// function q10() {
//   const start2015 = new Date(2015, 0, 1);
//   const diff = Math.floor((Date.now() - start2015) / 1000);
//   alert("Seconds since Jan 1, 2015: " + diff);
// }

// function q11() {
//   const now = new Date();
//   const newDate = new Date(now.getTime());
//   newDate.setHours(newDate.getHours() + 1);
//   alert("Current: " + now + "\nOne hour ahead: " + newDate);
// }

// function q12() {
//   const now = new Date();
//   const old = new Date(now.getTime());
//   old.setFullYear(old.getFullYear() - 100);
//   alert("Current date: " + now + "\n100 years back: " + old);
// }

// function q13() {
//   const age = parseInt(prompt("Enter your age:"), 10);
//   if (!isNaN(age)) {
//     const birthYear = new Date().getFullYear() - age;
//     alert("Your age: " + age + "\nYour birth year: " + birthYear);
//   } else {
//     alert("Invalid input");
//   }
// }

// function q14() {
//   const customerName = prompt("Customer Name:");
//   const month = prompt("Month:");
//   const units = parseFloat(prompt("Number of units:"));
//   const charges = parseFloat(prompt("Charges per unit:"));
//   const late = parseFloat(prompt("Late Payment Surcharge:"));

//   if ([units, charges, late].some(isNaN)) {
//     alert("Invalid input");
//     return;
//   }

//   const net = units * charges;
//   const gross = net + late;

//   alert(
//     "K-Electric Bill\n" +
//     "Customer Name: " + customerName + "\n" +
//     "Month: " + month + "\n" +
//     "Number of units: " + units + "\n" +
//     "Charges per unit: " + charges.toFixed(2) + "\n" +
//     "Net Amount Payable (within Due Date): " + net.toFixed(2) + "\n" +
//     "Late Payment Surcharge: " + late.toFixed(2) + "\n" +
//     "Gross Amount Payable (after Due Date): " + gross.toFixed(2)
//   );
// }
