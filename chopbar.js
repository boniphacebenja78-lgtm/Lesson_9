// Step 1: Literals and Variables
const BAR_NAME = "Mama Auntie's Chop Bar";
const JOLLOF_PRICE = 35;
const SOBOLO_PRICE = 10;

let jollofQty = "2";
let soboloQty = "3";
let isOpen = true;

const customer = {
  name: "bonny",
  table: 4
};

// Display BAR_NAME in <h1>
document.getElementById("bar-name").textContent = BAR_NAME;

// Menu arrays from starter code
const items = ["Jollof Rice", "Sobolo", "Kelewele"];
const prices = [35, 10, 15];

// Calculate quantity numbers & subtotal
const parsedJollofQty = Number(jollofQty);
const parsedSoboloQty = Number(soboloQty);
const subtotal = (parsedJollofQty * JOLLOF_PRICE) + (parsedSoboloQty * SOBOLO_PRICE); // (2*35) + (3*10) = 100


//relational operators
console.log("Subtotal > 100:", subtotal > 100);
console.log("Subtotal <= 100:", subtotal <= 100);
console.log("Subtotal === 100:", subtotal === 100);

console.log('"10" == 10:', "10" == 10);   // true
console.log('"10" === 10:', "10" === 10); // false

//conditionaals
let messageText = "";

if (subtotal >= 150) {
  messageText = "Big order! Free drink on us.";
} else if (subtotal >= 50) {
  messageText = "Thanks for your order!";
} else {
  messageText = "Small chop, still sweet!";
}

document.getElementById("message").textContent = messageText;

// Ternary operators
const statusText = isOpen ? "Open" : "Closed";

// total formatted with toFixed(2) 
document.getElementById("total").textContent = `Total: GHS ${subtotal.toFixed(2)} (${statusText})`;



// loooping
const menuList = document.getElementById("menu");

for (let i = 0; i < items.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${items[i]} - GHS ${prices[i]}`;
  menuList.appendChild(listItem);
}



// The with Statement

document.getElementById("customer").textContent = `Customer: ${customer.name} | Table: ${customer.table}`;