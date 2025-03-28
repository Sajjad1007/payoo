const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");
const sendMoneyForm = document.getElementById("send-money-form");
const getBonusForm = document.getElementById("get-bonus-form");
const payBillForm = document.getElementById("pay-bill-form");
const transactionHistory = document.getElementById("transaction-history");

addMoneyForm.style.display = "none";
cashOutForm.style.display = "none";
sendMoneyForm.style.display = "none";
getBonusForm.style.display = "none";
payBillForm.style.display = "none";

document
  .getElementById("logout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
  });

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    addMoneyForm.style.display = "block";
    cashOutForm.style.display = "none";
    sendMoneyForm.style.display = "none";
    getBonusForm.style.display = "none";
    payBillForm.style.display = "none";
    transactionHistory.style.display = "none";
  });

document.getElementById("cash-out").addEventListener("click", function (event) {
  addMoneyForm.style.display = "none";
  cashOutForm.style.display = "block";
  sendMoneyForm.style.display = "none";
  getBonusForm.style.display = "none";
  payBillForm.style.display = "none";
  transactionHistory.style.display = "none";
});

document
  .getElementById("send-money")
  .addEventListener("click", function (event) {
    addMoneyForm.style.display = "none";
    cashOutForm.style.display = "none";
    sendMoneyForm.style.display = "block";
    getBonusForm.style.display = "none";
    payBillForm.style.display = "none";
    transactionHistory.style.display = "none";
  });

document
  .getElementById("get-bonus")
  .addEventListener("click", function (event) {
    addMoneyForm.style.display = "none";
    cashOutForm.style.display = "none";
    sendMoneyForm.style.display = "none";
    getBonusForm.style.display = "block";
    payBillForm.style.display = "none";
    transactionHistory.style.display = "none";
  });

document.getElementById("pay-bill").addEventListener("click", function (event) {
  addMoneyForm.style.display = "none";
  cashOutForm.style.display = "none";
  sendMoneyForm.style.display = "none";
  getBonusForm.style.display = "none";
  payBillForm.style.display = "block";
  transactionHistory.style.display = "none";
});

document
  .getElementById("transactions")
  .addEventListener("click", function (event) {
    addMoneyForm.style.display = "none";
    cashOutForm.style.display = "none";
    sendMoneyForm.style.display = "none";
    getBonusForm.style.display = "none";
    payBillForm.style.display = "none";
    transactionHistory.style.display = "block";
  });
