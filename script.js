// Initial balance
let balance = 1000;

// Update balance display
function updateBalance() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

// Deposit
function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }
    balance += depositAmount;
    updateBalance();
    document.getElementById('deposit-amount').value = '';
}

// Withdrawal
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    if (withdrawAmount > balance) {
        alert('Insufficient funds!');
        return;
    }
    balance -= withdrawAmount;
    updateBalance();
    document.getElementById('withdraw-amount').value = '';
}

// Initialize the balance display
updateBalance();