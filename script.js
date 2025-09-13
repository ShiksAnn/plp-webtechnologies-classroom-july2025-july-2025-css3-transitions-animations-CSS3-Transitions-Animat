/* =====================
   Part 2: JavaScript Functions
===================== */

// Global variable
let globalName = "Guest";

// Function with parameter & return value
function greetUser(name) {
  let greeting = "Hello, " + name + "! Welcome 🎉"; // local scope
  return greeting;
}

// Reuse greetUser()
function showMessage(customName) {
  let message = greetUser(customName); 
  document.getElementById("message").innerText = message;
}

// Another function using parameters & return
function calculateSquare(num) {
  let result = num * num;
  document.getElementById("calculation").innerText = 
    `The square of ${num} is ${result}`;
  return result;
}

/* =====================
   Part 3: CSS + JavaScript Integration
===================== */
function animateBox() {
  const box = document.getElementById("dynamicBox");
  box.classList.toggle("animate"); // toggle animation
}



