document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const account = document.getElementById("login-account");
    const password = document.getElementById("login-password");

    if (
      account.value.trim() === "" ||
      Number.isNaN(Number(account.value)) ||
      Number(account.value) <= 0
    ) {
      alert("Account number is invalid.");
      account.value = "";
    } else {
      if (password.value !== "123456") {
        alert("Password is incorrect.\nPassword: 123456");
        password.value = "";
      } else {
        window.location.href = "./home.html";
        account.value = "";
        password.value = "";
      }
    }
  });
