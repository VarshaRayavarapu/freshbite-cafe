document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const category = document.getElementById("category").value;
  const itemName = document.getElementById("itemName").value;
  const size = document.getElementById("size").value;
  const addon = document.getElementById("addon").value;
  const notes = document.getElementById("notes").value;

  const orderSummary = document.getElementById("orderSummary");

  orderSummary.innerHTML = `
    <h3>Your Order Has Been Placed!</h3>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Item Name:</strong> ${itemName}</p>
    <p><strong>Size:</strong> ${size}</p>
    <p><strong>Add-on:</strong> ${addon}</p>
    <p><strong>Special Instructions:</strong> ${notes ? notes : "None"}</p>
  `;

  document.getElementById("orderForm").reset();
});