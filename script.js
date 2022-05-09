const input = document.getElementById("inp-bill");
const button = document.querySelectorAll(".tip");
const customTip = document.getElementById("inp-tip");
const error = document.getElementById("error");
const people = document.getElementById("inp-people");
const totalVal = document.querySelectorAll(".value");
const reset = document.querySelector(".reset");

let billVal = 0;
let peopleVal = 1;
let tipVal = 0.15;

input.addEventListener("input", validateBill);
customTip.addEventListener("input", tipCustomVal);
people.addEventListener("input", setPeopleVal);
reset.addEventListener("click", handleReset);

function validateBill() {
  if (input.value.includes(",")) {
    input.value.replace(",", ".");
  }
  billVal = parseFloat(input.value);
  calculate();
  console.log(billVal);
}

button.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  button.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
      tipVal = parseFloat(btn.innerHTML) / 100;
      // console.log(buttonVal)
      // making the innerHTML of a button to be a string,
      // then divide by 100 to make a percent because parsefloat cannot read % in integer.
      console.log(tipVal);
    }
  });
  customTip.value = "";
  calculate();
}

function tipCustomVal() {
  tipVal = parseFloat(customTip.value / 100);
  button.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (customTip.value !== 0) {
    calculate();
  }
  console.log(tipVal);
}

function setPeopleVal() {
  peopleVal = parseFloat(people.value);
  if (peopleVal <= 0) {
    error.innerHTML = "number must be greater than zero";
    setTimeout(function () {
      error.innerHTML = "";
    }, 2000);
  }
  console.log(peopleVal);
  calculate();
}

function calculate() {
  if (peopleVal >= 1) {
    let tip = (billVal * tipVal) / peopleVal;
    let totalAmount = (billVal * (tipVal + 1)) / peopleVal;

    totalVal[0].innerHTML = "$" + tip.toFixed(2);
    totalVal[1].innerHTML = "$" + totalAmount.toFixed(2);
  }
}

function handleReset() {
  input.value = 0.0;
  validateBill();

  button[2].click();
  people.value = 1;
  setPeopleVal();
}

// const tipBtns = document.querySelectorAll(".tip");
// const tipCustom = document.getElementById("inp-tip");
// const people = document.getElementById("inp-people");
// const errorMsg = document.querySelector(".error-msg");
// const results = document.querySelectorAll(".value");
// const resetBtn = document.querySelector(".reset");

// let billValue = 0.0; //default value for bill input
// let tipValue = 0.15; //default value -> 15% button is active
// let peopleValue = 1; // default value for Number of people input

// input.addEventListener("input", validateBill);

// function validateBill() {
//   if (input.value.includes(",")) {
//     input.value.replace(",", ".");
//   }
//   billVal = parseFloat(input.value);
//   calculate();
//   console.log(billVal);
// }

// customTip.addEventListener("input", tipCustomVal);
// people.addEventListener("input", setPeopleVal);
// reset.addEventListener("click", handleReset);

// // to get the value for each button
// // store the value inside a global variable
// // perform foreach to respective target, ie button.
// // make a function, inside the function, do another foreach;
// // make a conditional that states. if the clicked button is the same with the innerHTML of a button, then rewrite the value the global variable

// button.forEach((btn) => {
//   btn.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   button.forEach((btn) => {
//     btn.classList.remove("active");
//     if (event.target.innerHTML === btn.innerHTML) {
//       btn.classList.add("active");
//       tipVal = parseFloat(btn.innerHTML) / 100;
//       // console.log(buttonVal)
//       // making the innerHTML of a button to be a string,
//       // then divide by 100 to make a percent because parsefloat cannot read % in integer.
//       console.log(tipVal);
//     }
//   });
//   customTip.value = "";
//   calculate();
// }

// function tipCustomVal() {
//   tipVal = parseFloat(customTip.value / 100);
//   button.forEach((btn) => {
//     btn.classList.remove("active");
//   });
//   if (customTip.value !== 0) {
//     calculate();
//   }
//   console.log(tipVal);
// }

// function setPeopleVal() {
//   peopleVal = parseFloat(people.value);
//   if (peopleVal <= 0) {
//     error.innerHTML = "number must be greater than zero";
//     setTimeout(function () {
//       error.innerHTML = "";
//     }, 2000);
//   }
//   console.log(peopleVal);
//   calculate();
// }

// function calculate() {
//   if (peopleVal >= 1) {
//     let tip = (billVal * tipVal) / peopleVal;
//     let totalAmount = (billVal * (tipVal + 1)) / peopleVal;

//     totalVal[0].innerHTML = "$" + tip.toFixed(2);
//     totalVal[1].innerHTML = "$" + totalAmount.toFixed(2);
//   }
// }

// function handleReset() {
//   input.value = 0.0;
//   validateBill();

//   button[2].click();
//   people.value = 1;
//   setPeopleVal();
// }

// // //  FUNCTION FOR BILL input
// // bill.addEventListener("input", setBillValue);
// // function setBillValue() {
// //   // check if Bill input contain comma and replace it with dot
// //   if (bill.value.includes(",")) {
// //     bill.value = bill.value.replace(",", "."); // replace comma with dot
// //     console.log("comma replaced");
// //   }
// //   //check if Bill input is a floating point number and if it is not set it to 0 and display error message to the user
// //   if (!validateFloat(bill.value)) {
// //     bill.value = bill.value.substring(0, bill.value.length - 1);
// //   }

// //   billValue = parseFloat(bill.value);

// //   calculateTip();
// //   //console.log(billValue);
// // }
// // //End  FUNCTION FOR BILL input

// // // FUNCTION FOR TIP buttons 5%, 10%, 15%, 25%, 50%
// // tipBtns.forEach((btn) => {
// //   btn.addEventListener("click", handleClick);
// // });
// // function handleClick(event) {
// //   tipBtns.forEach((btn) => {
// //     //clear active state
// //     btn.classList.remove("btn-active"); //remove active class from all buttons
// //     //set active state
// //     if (event.target.innerHTML == btn.innerHTML) {
// //       btn.classList.add("btn-active"); //add active class to the clicked button
// //       console.log("added active class");

// //       //parseFloat() -> convert string to float and returns a floating point number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

// //       tipValue = parseFloat(btn.innerHTML) / 100; //set tipValue to clicked button value
// //       console.log(tipValue); // 5% -> 0.05 10% -> 0.1 15% -> 0.15 25% -> 0.25 50% -> 0.5

// //       //   tipValue = Number(btn.innerHTML.replace("%", "")); //set tipValue to the clicked button value
// //     }
// //   });
// // }

// // // FUNCTION FOR CUSTOM TIP input
// // tipCustom.addEventListener("input", setTipCustomValue);

// // //check that a string in JavaScript is a positive integer.
// // function validateInt(s) {
// //   //https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
// //   return /^\d+$/.test(s);
// //   //   let rgx = /^[0-9]*$/; // regex for numbers
// //   //   return s.match(rgx);
// // }

// // // validateFloat() -> check if input is a floating point number https://stackoverflow.com/questions/18405736/check-if-a-string-is-a-float-or-not
// // function validateFloat(s) {
// //   var rgx = /^[0-9]*\.?[0-9]*$/;
// //   return s.match(rgx);
// // }

// // //calculate tip and display it
// // function calculateTip() {
// //   //check if peopleValue is a positive integer and if it is not set it to 1
// //   if (peopleValue >= 1) {
// //     let tipAmount = (billValue * tipValue) / peopleValue; //calculate tip amount
// //     let total = (billValue * (tipValue + 1)) / peopleValue; //calculate total amount

// //     //https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
// //     results[0].innerHTML = "$" + tipAmount.toFixed(2); //display tip amount in Tip Amount/person result
// //     console.log(tipAmount);
// //     console.log(total);
// //     results[1].innerHTML = "$" + total.toFixed(2); //display total amount in Total Amount/person result
// //   }
// // }
// // console.log(calculateTip);
// // // FUNCTION FOR Custom TIP input
// // function setTipCustomValue() {
// //   //check if tipCustom input is a positive integer
// //   if (!validateInt(tipCustom.value)) {
// //     //   Explain tipCustom.value.substring
// //     tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
// //     console.log(` ${tipCustom.value} + "removed last character"`);
// //   }

// //   //check if tipCustom input is a positive integer
// //   tipValue = parseFloat(tipCustom.value / 100);

// //   //remove active state from buttons
// //   tipBtns.forEach((btn) => {
// //     btn.classList.remove("btn-active");
// //   });

// //   //add active state to custom button
// //   if (tipCustom.value !== "") {
// //     calculateTip();
// //     console.log("custom tip added");
// //   }

// //   console.log(` ${tipValue} + "tipValue"`);
// // }

// // // FUNCTION FOR NUMBER OF PEOPLE input
// // people.addEventListener("input", setPeopleValue);

// // function setPeopleValue() {
// //   //check if peopleValue is a positive integer and if it is not set it to 1
// //   // and display error message to the user
// //   if (!validateInt(people.value)) {
// //     // https://www.w3schools.com/jsref/jsref_substring.asp
// //     people.value = people.value.substring(0, people.value.length - 1);
// //     console.log(` ${people.value} + "removed last character"`);
// //   }

// //   peopleValue = parseFloat(people.value);

// //   if (peopleValue <= 0) {
// //     errorMsg.classList.add("show-error-msg");
// //     setTimeout(function () {
// //       errorMsg.classList.remove("show-error-msg");
// //     }, 3000);
// //   }

// //   calculateTip();
// //   //console.log(peopleValue);
// // }

// // // FUNCTION FOR RESET button
// // resetBtn.addEventListener("click", reset);

// // function reset() {
// //   bill.value = "";
// //   tipCustom.value = "";
// //   people.value = "";
// //   //remove active state from buttons
// //   tipBtns.forEach((btn) => {
// //     btn.classList.remove("btn-active");
// //   });
// //   //set default values
// //   billValue = 0.0;
// //   tipValue = 0.15;
// //   peopleValue = 1;
// //   //display default values
// //   results[0].innerHTML = "$0.00";
// //   results[1].innerHTML = "$0.00";
// // }
