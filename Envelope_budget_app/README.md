<img width="1066" height="827" alt="image" src="https://github.com/user-attachments/assets/3bb81108-1e13-4647-a39c-0b9a606de670" />
💰 Envelope Budgeter
A clean, responsive web application for managing monthly expenses using the traditional envelope budgeting method.

Envelope Budgeter lets you enter your monthly income, track fixed rent, and dynamically add expenses to categories such as Food, Utilities, and Entertainment. It automatically calculates your remaining balance and visually indicates whether you have a surplus or deficit.

🚀 Features
Monthly Income Tracking

Enter your total monthly income.
Automatically calculates the remaining balance.
Fixed Rent Tracking

Add your monthly rent as a fixed expense.
Dynamic Expense Entries

Add custom expenses with a name and amount.

Assign expenses to:

🍔 Food
💡 Utilities
🎬 Entertainment
Input Sanitization

Automatically removes unnecessary spaces.
Handles + and - characters in numeric input.
Scientific Notation Protection

Detects unintended scientific notation such as 1e3.
Prevents invalid values from affecting calculations.
Real-Time Budget Calculation

Updates expenses and remaining balance dynamically.
Visual Financial Status

🟢 Surplus — expenses are within the available income.
🔴 Deficit — expenses exceed the available income.
Responsive Design

Works across desktop, tablet, and mobile screen sizes.
🛠️ Technology Stack
HTML5

Semantic elements
Forms
Fieldsets and legends
Input validation
CSS3

Flexbox
CSS custom properties
Responsive media queries
Modern UI styling
JavaScript ES6

DOM manipulation
Event handling
Regular expressions
Input validation
Dynamic elements
Budget calculations
📁 Project Structure
Envelope-Budgeter/
│
├── index.html      # Main application structure
├── script.js       # Application logic and calculations
├── styles.css      # Styling and responsive layout
└── README.md       # Project documentation
🧠 How It Works
The application follows the basic envelope budgeting concept:

Monthly Income
      ↓
Fixed Expenses
      ↓
Category Expenses
      ↓
Total Expenses
      ↓
Remaining Balance
The remaining balance is calculated as:

Remaining Balance = Monthly Income - Total Expenses
If the result is positive or zero, the application displays a surplus.

If the result is negative, the application displays a deficit.

🔐 Input Sanitization
The application uses regular expressions to clean numeric inputs before calculations.

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
This removes:

+
-
Spaces
For example:

" + 1 500 "
becomes:

"1500"
🔎 Scientific Notation Validation
The application also checks for unintended scientific notation such as:

1e3
5E4
10e2
A regular expression can be used to detect the e or E notation:

function isInvalidInput(str) {
  return /e/i.test(str);
}
This prevents unexpected values from being used in the budget calculations.

📊 Example
Suppose the user enters:

Monthly Income:     $3000
Rent:               $1000
Food:                $400
Utilities:           $200
Entertainment:       $150
Total expenses:

1000 + 400 + 200 + 150 = $1750
Remaining balance:

3000 - 1750 = $1250
The application therefore displays:

🟢 Surplus: $1250
If expenses become greater than income, the application instead displays a deficit.

⚙️ How to Run
1. Download or clone the project
git clone <your-repository-url>
2. Open the project folder
Make sure the following files are together:

index.html
script.js
styles.css
3. Run the application
Open index.html in a modern web browser.

No backend or database is required.

🎯 Learning Objectives
This project demonstrates practical JavaScript concepts including:

DOM selection and manipulation
Event listeners
Form handling
Input validation
Regular expressions
String manipulation
Dynamic DOM elements
Arithmetic calculations
Conditional rendering
CSS class manipulation
Responsive web design
