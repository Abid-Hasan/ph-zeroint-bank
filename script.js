document.querySelector('.login-button').addEventListener('click', () => {
    document.querySelector('.login-area').style.display = 'none';
    document.querySelector('.account-area').style.display = 'block'
});

let deposit = 0, withdraw = 0, balance = 1500;

document.querySelector('.deposit-button').addEventListener('click', () => {
    const input = document.querySelector('.deposit-input');
    let amount = parseFloat(input.value);
    deposit += amount;
    document.querySelector('.deposit-display').innerHTML = deposit;
    balance += amount;
    document.querySelector('.balance-display').innerHTML = balance;
    input.value = '';
});

document.querySelector('.withdraw-button').addEventListener('click', () => {
    const input = document.querySelector('.withdraw-input');
    let amount = parseFloat(input.value);
    withdraw += amount;
    document.querySelector('.withdraw-display').innerHTML = withdraw;
    balance -= amount;
    document.querySelector('.balance-display').innerHTML = balance;
    input.value = '';
});