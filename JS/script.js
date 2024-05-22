document.getElementById('add-item').addEventListener('click', addItem);
document.getElementById('clear-all').addEventListener('click', clearAll);

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemAmount = document.getElementById('item-amount').value;

    if (itemName === '' || itemAmount === '') {
        alert('Please enter both item name and amount');
        return;
    }

    const itemsList = document.getElementById('items-list');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.textContent = `${itemName}: ₹${parseFloat(itemAmount).toFixed(2)}`;

    itemsList.appendChild(newItem);

    updateTotal(parseFloat(itemAmount));

    document.getElementById('item-name').value = '';
    document.getElementById('item-amount').value = '';
}

function clearAll() {
    document.getElementById('items-list').innerHTML = '';
    document.getElementById('total-amount').textContent = '0.00';
}

function updateTotal(amount) {
    const totalElement = document.getElementById('total-amount');
    const currentTotal = parseFloat(totalElement.textContent);
    const newTotal = currentTotal + amount;
    totalElement.textContent = newTotal.toFixed(2);
}
