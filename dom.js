document.getElementById("cal-button").addEventListener("click", function () {
  const foodInput = document.getElementById("food-btn");
  const foodPrice = parseInt(foodInput.value);
  //   reent
  const rentInput = document.getElementById("rent-btn");
  const rentPrice = parseInt(rentInput.value);
  //   colth
  const clothInput = document.getElementById("cloth-btn");
  const clothPrice = parseInt(clothInput.value);
  const totalprice = foodPrice + rentPrice + clothPrice;
  //  Expecn
  const exPenis = document.getElementById("ex-total");
  const totalExpensiv = exPenis.innerText;
  if (totalprice > 0) {
    exPenis.innerText = totalprice;
  } else {
    const vaidNumber = document.getElementById("eror-message");
    vaidNumber.style.display = "block";
  }

  // total balance
  const balance = document.getElementById("income-total");
  const balancetotal = parseInt(balance.value);
  const total = balancetotal - totalprice;

  // upcome balance
  const exBalance = document.getElementById("balance-total");
  const exBalanceTotal = exBalance.innerText;
  if (total > 0) {
    exBalance.innerText = total;
  }
});
