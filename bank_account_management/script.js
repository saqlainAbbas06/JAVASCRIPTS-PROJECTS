class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: 'deposit', amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: 'withdraw', amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(transaction => transaction.type === 'deposit')
      .map(transaction => transaction.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(transaction => transaction.type === 'withdraw')
      .map(transaction => transaction.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();

const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amountInput');
const messageBox = document.getElementById('messageBox');
const depositsList = document.getElementById('depositsList');
const withdrawalsList = document.getElementById('withdrawalsList');
const historyList = document.getElementById('historyList');

function refreshUI() {
  balanceDisplay.textContent = `$${myAccount.balance.toFixed(2)}`;

  const deposits = myAccount.transactions.filter(t => t.type === 'deposit');
  const withdrawals = myAccount.transactions.filter(t => t.type === 'withdraw');

  const lastDeposit = deposits[deposits.length - 1];
  const lastWithdrawal = withdrawals[withdrawals.length - 1];

  depositsList.innerHTML = lastDeposit
    ? `<p>+ $${lastDeposit.amount.toFixed(2)}</p>`
    : `<p class="empty">No deposits yet.</p>`;

  withdrawalsList.innerHTML = lastWithdrawal
    ? `<p>- $${lastWithdrawal.amount.toFixed(2)}</p>`
    : `<p class="empty">No withdrawals yet.</p>`;

  historyList.innerHTML = myAccount.transactions.length
    ? myAccount.transactions.map((t, i) => {
        const sign = t.type === 'deposit' ? '+' : '-';
        const label = t.type === 'deposit' ? 'Deposit' : 'Withdraw';
        return `<p>${i + 1}. ${label}: ${sign}$${t.amount.toFixed(2)}</p>`;
      }).join('')
    : `<p class="empty">No transactions yet.</p>`;
}

function toggleHistory(e) {
  const isHidden = historyList.style.display === 'none';
  historyList.style.display = isHidden ? 'block' : 'none';
  e.target.textContent = isHidden ? 'Hide Transaction History' : 'Show Transaction History';
}

function getAmount() {
  return parseFloat(amountInput.value);
}

function handleDeposit() {
  const amount = getAmount();
  const result = myAccount.deposit(amount);
  messageBox.textContent = result;
  amountInput.value = '';
  refreshUI();
}

function handleWithdraw() {
  const amount = getAmount();
  const result = myAccount.withdraw(amount);
  messageBox.textContent = result;
  amountInput.value = '';
  refreshUI();
}


refreshUI();