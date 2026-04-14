function checkStatus() {
  let id = document.getElementById("orderId").value;
  let result = document.getElementById("result");

  if(id === "123") {
    result.innerText = "Completed ✅";
  }
  else if(id === "456") {
    result.innerText = "In Progress ⏳";
  }
  else {
    result.innerText = "Order not found ❌";
  }
}
