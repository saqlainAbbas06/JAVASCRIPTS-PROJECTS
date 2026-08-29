<img width="647" height="677" alt="image" src="https://github.com/user-attachments/assets/444c36a8-c615-4e97-8857-7bdec45db07d" />

# 🏦 Bank Account

A simple and interactive **Bank Account Management** web application built with **HTML, CSS, and JavaScript**.

The application allows users to deposit and withdraw money, check their current balance, view their latest transactions, and display complete transaction history.

## 🚀 Features

* 💰 **Deposit Money** — Add money to your bank account.
* 💸 **Withdraw Money** — Withdraw money if sufficient balance is available.
* 💵 **Live Balance** — Balance updates immediately after every transaction.
* 📥 **Latest Deposit** — Displays the most recent deposit.
* 📤 **Latest Withdrawal** — Displays the most recent withdrawal.
* 📜 **Transaction History** — View all deposits and withdrawals.
* ⚠️ **Input Validation** — Prevents invalid deposits and withdrawals.
* 🧹 **Automatic Input Clearing** — Clears the amount field after every transaction.
* 📱 **Responsive Design** — Works across different screen sizes.
* 🌙 **Dark UI** — Simple modern dark-themed interface.

## 🛠️ Technologies Used

* **HTML5** — Application structure
* **CSS3** — Styling and responsive layout
* **JavaScript (ES6)** — Application logic and DOM manipulation
* **Object-Oriented Programming** — `BankAccount` class for account management

## 📂 Project Structure

```text
Bank-Account/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## ⚙️ How It Works

The application uses a JavaScript `BankAccount` class to manage the account.

### BankAccount Class

The class maintains two main properties:

```javascript
this.balance = 0;
this.transactions = [];
```

* `balance` stores the current account balance.
* `transactions` stores every successful deposit and withdrawal.

### Deposit

The `deposit()` method checks that the amount is greater than zero before adding it to the balance.

```javascript
deposit(amount) {
  if (amount > 0) {
    this.transactions.push({
      type: 'deposit',
      amount: amount
    });

    this.balance += amount;
  }
}
```

### Withdrawal

The `withdraw()` method ensures that:

1. The amount is greater than zero.
2. The requested amount does not exceed the current balance.

```javascript
withdraw(amount) {
  if (amount > 0 && amount <= this.balance) {
    this.transactions.push({
      type: 'withdraw',
      amount: amount
    });

    this.balance -= amount;
  }
}
```

## 📊 Example

Starting balance:

```text
$0.00
```

Deposit `$500`:

```text
Successfully deposited $500.
New balance: $500
```

Withdraw `$150`:

```text
Successfully withdrew $150.
New balance: $350
```

Transaction history:

```text
1. Deposit: +$500.00
2. Withdraw: -$150.00
```

Current balance:

```text
$350.00
```

## ▶️ Running the Project

No dependencies or installation are required.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bank-account.git
```

### 2. Open the project

Navigate to the project folder:

```bash
cd bank-account
```

### 3. Run the application

Open `index.html` in your browser.

You can also use **VS Code Live Server** for a better development experience.

## 🎯 Learning Objectives

This project demonstrates several important JavaScript concepts:

* Classes and constructors
* Objects and arrays
* Methods
* Conditional statements
* Array `filter()` and `map()`
* DOM manipulation
* Event handling
* Template literals
* Number formatting with `toFixed()`
* Basic form/input validation
* Managing application state


