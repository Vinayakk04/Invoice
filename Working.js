let invoiceItems = [];

function redirectToGenerator() {
  const landingSection = document.querySelector('.landing');
  const invoiceGenerator = document.getElementById('invoiceGenerator');

  landingSection.style.display = 'none';
  invoiceGenerator.style.display = 'block';
}

function addProduct() {
  const productNameInput = document.getElementById('productName');
  const unitInput = document.getElementById('unit');
  const priceInput = document.getElementById('price');

  const productName = productNameInput.value.trim();
  const unit = parseInt(unitInput.value);
  const price = parseFloat(priceInput.value);

  if (productName && unit && price) {
    const amount = unit * price;
    const newItem = { product: productName, unit, price, amount };
    invoiceItems.push(newItem);

    displayInvoice();
    displayTotalAmount();
    
    // Clear input fields after adding the product
    productNameInput.value = '';
    unitInput.value = '';
    priceInput.value = '';
  } else {
    alert('Please enter valid product details.');
  }
}

function displayInvoice() {
  const invoiceDetails = document.getElementById('invoiceDetails');

  let html = '<h3>Invoice Details</h3>';
  html += '<table>';
  html += `
    <tr>
        <th>Product Name</th>
        <th>Units</th>
        <th>Price (in Rs.)</th>
        <th>Amount (in Rs.)</th>
    </tr>
  `;
  invoiceItems.forEach(item => {
    html += `<tr><td>${item.product}</td><td>${item.unit}</td><td>${item.price}</td><td>${item.amount}</td></tr>`;
  });
  html += '</table>';
  invoiceDetails.innerHTML = html;
}

function displayTotalAmount() {
  const invoiceDetails = document.getElementById('invoiceDetails');
  const totalAmount = invoiceItems.reduce((total, item) => total + item.amount, 0);

  const totalHtml = `<p><strong>Total Amount: Rs. ${totalAmount.toFixed(2)}</strong></p>`;
  invoiceDetails.insertAdjacentHTML('beforeend', totalHtml);
}
