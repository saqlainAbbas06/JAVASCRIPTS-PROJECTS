<img width="882" height="922" alt="image" src="https://github.com/user-attachments/assets/9bf8bead-3d1a-4708-946b-4ec5692a13e4" />

# Customer Complaint Form

A responsive **Customer Complaint Form** built with HTML, CSS, and JavaScript. The application validates customer information, order details, complaint reasons, and desired solutions before allowing the form to be considered valid.

This project was created as a JavaScript form-validation exercise, focusing on DOM manipulation, regular expressions, event handling, conditional validation, and reusable validation functions.

## 🚀 Features

* Full name validation
* Email address validation
* Order number validation
* Product code validation using a regular expression
* Positive quantity validation
* Complaint reason validation
* Support for multiple complaint checkboxes
* Conditional complaint description validation
* Desired solution validation
* Conditional solution description validation
* Real-time validation using `change` events
* Green border for valid fields
* Red border for invalid fields
* Complete form validation on submission

## 📋 Validation Rules

| Field                 | Validation                                                                     |
| --------------------- | ------------------------------------------------------------------------------ |
| Full Name             | Must not be empty                                                              |
| Email                 | Must contain a valid email format                                              |
| Order No              | Must contain exactly 10 digits and start with `2024`                           |
| Product Code          | Must follow `XX##-X###-XX#`                                                    |
| Quantity              | Must be a positive integer                                                     |
| Complaint Reason      | At least one checkbox must be selected                                         |
| Complaint Description | Required only when `Other` is selected and must contain at least 20 characters |
| Desired Solution      | At least one radio button must be selected                                     |
| Solution Description  | Required only when `Other` is selected and must contain at least 20 characters |

## 🧩 Product Code Format

The product code follows this pattern:

```text
XX##-X###-XX#
```

Where:

* `X` = uppercase or lowercase letter
* `#` = number

Example:

```text
AB12-C123-DE4
```

The validation is implemented using a regular expression:

```js
/^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/
```

## 🛠️ Technologies Used

* **HTML5** — Form structure and semantic elements
* **CSS3** — Styling and layout
* **JavaScript** — Form validation and DOM manipulation
* **Regular Expressions** — Email, order number, and product code validation

## 📂 Project Structure

```text
customer-complaint-form/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## ⚙️ Main JavaScript Functions

### `validateForm()`

Checks every form field and returns an object containing a Boolean result for each field.

Example:

```js
{
  "full-name": true,
  "email": true,
  "order-no": true,
  "product-code": false,
  "quantity": true,
  "complaints-group": true,
  "complaint-description": true,
  "solutions-group": true,
  "solution-description": true
}
```

### `isValid()`

Receives the object returned by `validateForm()` and checks whether every field is valid.

```js
function isValid(result) {
  return Object.values(result).every(
    value => value === true
  );
}
```

## 🎨 Validation Feedback

The form provides visual feedback to the user:

* 🟢 **Green border** — field contains a valid value
* 🔴 **Red border** — field contains an invalid value

For checkbox and radio groups, the border of the corresponding `<fieldset>` is changed instead of individual controls.

## 📤 Form Submission

When the user submits the form:

1. `validateForm()` checks every field.
2. `isValid()` determines whether the complete form is valid.
3. Invalid fields are highlighted with a red border.
4. Valid fields are highlighted with a green border.
5. The form submission is prevented while validation is being performed.

## ▶️ How to Run

1. Clone or download the project.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Fill out the complaint form.
5. Change fields to see real-time validation.
6. Submit the form to validate all fields.

No backend or database is required.

## 📚 What I Learned

This project helped practice:

* `document.getElementById()`
* `querySelector()`
* `querySelectorAll()`
* DOM event listeners
* `change` and `submit` events
* Regular expressions
* Checkbox and radio button handling
* Conditional validation
* Arrays and `.some()`
* `Object.values()`
* `.every()`
* Returning objects from functions
* Dynamic styling with JavaScript

## 🔮 Future Improvements

Possible improvements include:

* Displaying specific error messages below each field
* Adding a success message after valid submission
* Improving accessibility
* Adding stronger email validation
* Adding a reset button
* Storing submitted complaints in a database
* Connecting the form to a backend API

## 👨‍💻 Author

**Saqlain Abbas**

Software Engineering Student

This project was developed as part of JavaScript practice and form-validation learning.
