const currentBalance = document.getElementById("current-balance");
const transactionContainer = document.getElementById("transaction-container");
const transactionTitle = document.getElementById("transaction-title");
const clearAll = document.getElementById("clear-all");

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("add-money-bank");
    const account = document.getElementById("add-money-account");
    const amount = document.getElementById("add-money-amount");
    const password = document.getElementById("add-money-password");

    if (bank.value === "default") {
      alert("No bank is selected.");
    } else if (
      account.value.trim() === "" ||
      Number.isNaN(Number(account.value)) ||
      Number(account.value) < 0
    ) {
      alert("Account number is invalid.");
      account.value = "";
    } else if (
      amount.value.trim() === "" ||
      Number.isNaN(Number(amount.value)) ||
      Number(amount.value) < 0
    ) {
      alert("Amount is invalid.");
      amount.value = "";
    } else if (password.value !== "123456") {
      alert("Password is incorrect.\nPassword: 123456");
      password.value = "";
    } else {
      const date = new Date();
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${String(hours).padStart(
        2,
        "0"
      )}:${minutes} ${ampm}`;

      if (transactionTitle.innerText === "No Recent Transactions") {
        transactionTitle.innerText = "Transaction History";
        clearAll.style.display = "block";
      }

      const div = document.createElement("div");
      div.classList.add(
        "card",
        "bg-white",
        "w-full",
        "shrink-0",
        "rounded-xl",
        "py-3",
        "px-4",
        "flex",
        "flex-row",
        "gap-4",
        "items-center",
        "mt-4"
      );
      div.innerHTML = `
        <div class="p-3 bg-gray-100 rounded-full">
          <img src="./assets/add-money.png" loading="lazy" alt="Add Money">
        </div>
        <div>
          <h3 class="text-base font-medium opacity-70 mb-1">Added Money $${amount.value} </h3>
          <p class="text-xs opacity-70">Today ${formattedTime}</p>
        </div>
      `;
      currentBalance.innerText =
        Number(currentBalance.innerText) + Number(amount.value);
      transactionContainer.appendChild(div);
      bank.selectedIndex = 0;
      account.value = "";
      amount.value = "";
      password.value = "";
    }
  });

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const service = document.getElementById("cash-out-service");
    const agent = document.getElementById("cash-out-agent");
    const amount = document.getElementById("cash-out-amount");
    const password = document.getElementById("cash-out-password");

    if (service.value === "default") {
      alert("No service is selected.");
    } else if (
      agent.value.trim() === "" ||
      agent.value.length !== 11 ||
      !agent.value.startsWith("01")
    ) {
      alert("Mobile number is invalid.");
      agent.value = "";
    } else if (
      amount.value.trim() === "" ||
      Number.isNaN(Number(amount.value)) ||
      Number(amount.value) < 0
    ) {
      alert("Amount is invalid.");
      amount.value = "";
    } else if (password.value !== "123456") {
      alert("Password is incorrect.\nPassword: 123456");
      password.value = "";
    } else {
      if (Number(currentBalance.innerText) >= Number(amount.value)) {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const formattedTime = `${String(hours).padStart(
          2,
          "0"
        )}:${minutes} ${ampm}`;

        if (transactionTitle.innerText === "No Recent Transactions") {
          transactionTitle.innerText = "Transaction History";
          clearAll.style.display = "block";
        }

        const div = document.createElement("div");
        div.classList.add(
          "card",
          "bg-white",
          "w-full",
          "shrink-0",
          "rounded-xl",
          "py-3",
          "px-4",
          "flex",
          "flex-row",
          "gap-4",
          "items-center",
          "mt-4"
        );
        div.innerHTML = `
          <div class="p-3 bg-gray-100 rounded-full">
            <img src="./assets/cash-out.png" loading="lazy" alt="Cash Out">
          </div>
          <div>
            <h3 class="text-base font-medium opacity-70 mb-1">Cashed Out $${amount.value} </h3>
            <p class="text-xs opacity-70">Today ${formattedTime}</p>
          </div>
        `;
        currentBalance.innerText =
          Number(currentBalance.innerText) - Number(amount.value);
        transactionContainer.appendChild(div);
        service.selectedIndex = 0;
        agent.value = "";
        password.value = "";
        amount.value = "";
      } else {
        alert("Cash out failed.\nCurrent balance: " + currentBalance.innerText);
        amount.value = "";
      }
    }
  });

document
  .getElementById("send-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("send-money-bank");
    const account = document.getElementById("send-money-account");
    const amount = document.getElementById("send-money-amount");
    const password = document.getElementById("send-money-password");

    if (bank.value === "default") {
      alert("No bank is selected.");
    } else if (
      account.value.trim() === "" ||
      Number.isNaN(Number(account.value)) ||
      Number(account.value) < 0
    ) {
      alert("Account number is invalid.");
      account.value = "";
    } else if (
      amount.value.trim() === "" ||
      Number.isNaN(Number(amount.value)) ||
      Number(amount.value) < 0
    ) {
      alert("Amount is invalid.");
      amount.value = "";
    } else if (password.value !== "123456") {
      alert("Password is incorrect.\nPassword: 123456");
      password.value = "";
    } else {
      if (Number(currentBalance.innerText) >= Number(amount.value)) {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const formattedTime = `${String(hours).padStart(
          2,
          "0"
        )}:${minutes} ${ampm}`;

        if (transactionTitle.innerText === "No Recent Transactions") {
          transactionTitle.innerText = "Transaction History";
          clearAll.style.display = "block";
        }

        const div = document.createElement("div");
        div.classList.add(
          "card",
          "bg-white",
          "w-full",
          "shrink-0",
          "rounded-xl",
          "py-3",
          "px-4",
          "flex",
          "flex-row",
          "gap-4",
          "items-center",
          "mt-4"
        );
        div.innerHTML = `
          <div class="p-3 bg-gray-100 rounded-full">
            <img src="./assets/send-money.png" loading="lazy" alt="Send Money">
          </div>
          <div>
            <h3 class="text-base font-medium opacity-70 mb-1">Sent Money $${amount.value} </h3>
            <p class="text-xs opacity-70">Today ${formattedTime}</p>
          </div>
        `;
        currentBalance.innerText =
          Number(currentBalance.innerText) - Number(amount.value);
        transactionContainer.appendChild(div);
        bank.selectedIndex = 0;
        account.value = "";
        amount.value = "";
        password.value = "";
      } else {
        alert(
          "Send money failed.\nCurrent balance: " + currentBalance.innerText
        );
        amount.value = "";
      }
    }
  });

document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getBonus = document.getElementById("bonus-coupon");
    const bonusCoupon = getBonus.value.match(/[A-Za-z]+|\d+/g);
    const password = document.getElementById("bonus-password");

    if (
      !Array.isArray(bonusCoupon) ||
      bonusCoupon[0] !== "BONUS" ||
      isNaN(bonusCoupon[1])
    ) {
      alert("Coupon is invalid.\nCoupon: BONUS10");
      getBonus.value = "";
    } else if (password.value !== "123456") {
      alert("Password is incorrect.\nPassword: 123456");
      password.value = "";
    } else {
      const bonus = Number(bonusCoupon[1]) % 100;

      if (bonus === 0) {
        getBonus.value = "";
        password.value = "";
        return;
      }

      const date = new Date();
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${String(hours).padStart(
        2,
        "0"
      )}:${minutes} ${ampm}`;

      if (transactionTitle.innerText === "No Recent Transactions") {
        transactionTitle.innerText = "Transaction History";
        clearAll.style.display = "block";
      }

      const div = document.createElement("div");
      div.classList.add(
        "card",
        "bg-white",
        "w-full",
        "shrink-0",
        "rounded-xl",
        "py-3",
        "px-4",
        "flex",
        "flex-row",
        "gap-4",
        "items-center",
        "mt-4"
      );
      div.innerHTML = `
        <div class="p-3 bg-gray-100 rounded-full">
          <img src="./assets/get-bonus.png" loading="lazy" alt="Get Bonus" class="w-6 h-6">
        </div>
        <div>
          <h3 class="text-base font-medium opacity-70 mb-1">Got Bonus ${bonus}% </h3>
          <p class="text-xs opacity-70">Today ${formattedTime}</p>
        </div>
      `;
      currentBalance.innerText =
        Number(currentBalance.innerText) * (1 + bonus / 100);
      transactionContainer.appendChild(div);
      getBonus.value = "";
      password.value = "";
    }
  });

document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const service = document.getElementById("pay-bill-service");
    const account = document.getElementById("pay-bill-account");
    const amount = document.getElementById("pay-bill-amount");
    const password = document.getElementById("pay-bill-password");

    if (service.value === "default") {
      alert("No bill is selected.");
    } else if (
      account.value.trim() === "" ||
      Number.isNaN(Number(account.value)) ||
      Number(account.value) < 0
    ) {
      alert("Account number is invalid.");
      account.value = "";
    } else if (
      amount.value.trim() === "" ||
      Number.isNaN(Number(amount.value)) ||
      Number(amount.value) < 0
    ) {
      alert("Amount is invalid.");
      amount.value = "";
    } else if (password.value !== "123456") {
      alert("Password is incorrect.\nPassword: 123456");
      password.value = "";
    } else {
      if (Number(currentBalance.innerText) >= Number(amount.value)) {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const formattedTime = `${String(hours).padStart(
          2,
          "0"
        )}:${minutes} ${ampm}`;

        if (transactionTitle.innerText === "No Recent Transactions") {
          transactionTitle.innerText = "Transaction History";
          clearAll.style.display = "block";
        }

        const div = document.createElement("div");
        div.classList.add(
          "card",
          "bg-white",
          "w-full",
          "shrink-0",
          "rounded-xl",
          "py-3",
          "px-4",
          "flex",
          "flex-row",
          "gap-4",
          "items-center",
          "mt-4"
        );
        div.innerHTML = `
          <div class="p-3 bg-gray-100 rounded-full">
            <img src="./assets/pay-bill.png" loading="lazy" alt="Pay Bill">
          </div>
          <div>
            <h3 class="text-base font-medium opacity-70 mb-1">Bill Paid $${amount.value} </h3>
            <p class="text-xs opacity-70">Today ${formattedTime}</p>
          </div>
        `;
        currentBalance.innerText =
          Number(currentBalance.innerText) - Number(amount.value);
        transactionContainer.appendChild(div);
        service.selectedIndex = 0;
        account.value = "";
        amount.value = "";
        password.value = "";
      } else {
        alert("Pay bill failed.\nCurrent balance: " + currentBalance.innerText);
        amount.value = "";
      }
    }
  });

clearAll.addEventListener("click", function (event) {
  transactionContainer.innerHTML = "";
  transactionTitle.innerText = "No Recent Transactions";
  clearAll.style.display = "none";
});
