"use scrict";

const limeButton = document.querySelector(".lime");
const saltedButton = document.querySelector(".salted");
const chocalateButton = document.querySelector(".chocalate");
const fruitButton = document.querySelector(".fruit");

const displayedTotal = document.querySelector("p");
let totalPrice = 0;

limeButton.addEventListener("click", (event) => {
  event.preventDefault;
  totalPrice += 2.0;
  displayedTotal.textContent = `Total: $${totalPrice}`;
});

saltedButton.addEventListener("click", (event) => {
  event.preventDefault;
  totalPrice += 3.0;
  displayedTotal.textContent = `Total: $${totalPrice}`;
});
chocalateButton.addEventListener("click", (event) => {
  event.preventDefault;
  totalPrice += 4.0;
  displayedTotal.textContent = `Total: $${totalPrice}`;
});
fruitButton.addEventListener("click", (event) => {
  event.preventDefault;
  totalPrice += 6.0;
  displayedTotal.textContent = `Total: $${totalPrice}`;
});

const coinForm = document.querySelector("form");
const coinContainer = document.querySelector(".coinBase");

coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let quantity = document.querySelector("#quantity").value;
  let coinType = document.querySelector("#coin").value;
  for (let i = 0; i < quantity; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add(coinType);
    newCoin.textContent = coinType;
    coinContainer.append(newCoin);
  }
});

const lightDiv = document.querySelector(".switch");

const on = document.querySelector(".on");
const off = document.querySelector(".off");
const toggle = document.querySelector(".toggle");
const end = document.querySelector(".end");
const light = document.querySelector(".light");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

on.addEventListener("click", (e) => {
  e.preventDefault();
  light.classList.add("lit");
});

off.addEventListener("click", (e) => {
  e.preventDefault();
  light.classList.remove("lit");
});

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  light.classList.toggle("lit");
});

end.addEventListener("click", (e) => {
  e.preventDefault();
  parent.removeChild(child);
});
