const date = new Date();
document.getElementById('show-date').innerText = date.toLocaleDateString();

// add buyer details
function addBuyerDetail() {
    document.getElementById('buyer-info').innerText = document.getElementById('buyer-details-input').value;
    document.getElementById('buyer-details-input').value = '';
}


function addItem() {
    const itemNameInput = document.getElementById('name-item-input');
    const itemPriceInput = document.getElementById('price-item-input');
    const itemQuantityInput = document.getElementById('quantity-item-input');
    const total = parseFloat(itemPriceInput.value) * parseFloat(itemQuantityInput.value);

    const infoTable = document.getElementById('info-table');
    infoTable.innerHTML = `
    <tr>
        <th>${itemNameInput.value}</th>
        <td>${itemPriceInput.value}</td>
        <td>${itemQuantityInput.value}</td>
        <td class="item__total">${total}</td>
    </tr>
    ` + infoTable.innerHTML;

    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemQuantityInput.value = '';

    calculateSubtotal();
}


function calculateSubtotal() {
    let subTotal = 0;
    const itemsTotal = document.getElementsByClassName('item__total');
    for (const itemTotal of itemsTotal) {
        const itemTotalValue = parseFloat(itemTotal.innerText);
        subTotal += itemTotalValue;
    }
    document.getElementById('sub-total').innerText = subTotal;

    const tax = subTotal * 0.2;

    document.getElementById('tax').innerText = tax.toFixed(2);

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('grand-total-2').innerText = grandTotal;
}

