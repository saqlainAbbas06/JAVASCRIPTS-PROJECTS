const form = document.getElementById('form');

const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');

const complaintsGroup = document.getElementById('complaints-group');
const complaintDescription = document.getElementById('complaint-description');

const solutionsGroup = document.getElementById('solutions-group');
const solutionDescription = document.getElementById('solution-description');

const otherComplaint = document.getElementById('other-complaint');
const otherSolution = document.getElementById('other-solution');


function validateForm() {

  
  const validFullName = fullName.value.trim() !== "";

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailRegex.test(email.value.trim());


  const orderRegex = /^2024\d{6}$/;
  const validOrderNo = orderRegex.test(orderNo.value.trim());

  const productRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
  const validProductCode = productRegex.test(productCode.value.trim());

  const validQuantity =
    Number.isInteger(Number(quantity.value)) &&
    Number(quantity.value) > 0;


  const complaints = complaintsGroup.querySelectorAll(
    'input[type="checkbox"]'
  );

  const validComplaints = [...complaints].some(
    complaint => complaint.checked
  );


  let validComplaintDescription = true;

  if (otherComplaint.checked) {
    validComplaintDescription =
      complaintDescription.value.trim().length >= 20;
  }



  const selectedSolution = solutionsGroup.querySelector(
    'input[type="radio"]:checked'
  );

  const validSolutions = selectedSolution !== null;



  let validSolutionDescription = true;

  if (otherSolution.checked) {
    validSolutionDescription =
      solutionDescription.value.trim().length >= 20;
  }


  return {
    "full-name": validFullName,
    "email": validEmail,
    "order-no": validOrderNo,
    "product-code": validProductCode,
    "quantity": validQuantity,
    "complaints-group": validComplaints,
    "complaint-description": validComplaintDescription,
    "solutions-group": validSolutions,
    "solution-description": validSolutionDescription
  };
}


function isValid(validationResult) {
  return Object.values(validationResult).every(
    value => value === true
  );
}




fullName.addEventListener('change', () => {
  fullName.style.borderColor =
    validateForm()["full-name"] ? 'green' : 'red';
});


email.addEventListener('change', () => {
  email.style.borderColor =
    validateForm()["email"] ? 'green' : 'red';
});


orderNo.addEventListener('change', () => {
  orderNo.style.borderColor =
    validateForm()["order-no"] ? 'green' : 'red';
});


productCode.addEventListener('change', () => {
  productCode.style.borderColor =
    validateForm()["product-code"] ? 'green' : 'red';
});


quantity.addEventListener('change', () => {
  quantity.style.borderColor =
    validateForm()["quantity"] ? 'green' : 'red';
});



const complaintCheckboxes =
  complaintsGroup.querySelectorAll('input[type="checkbox"]');

complaintCheckboxes.forEach(checkbox => {

  checkbox.addEventListener('change', () => {

    const result = validateForm();

    complaintsGroup.style.borderColor =
      result["complaints-group"] ? 'green' : 'red';

    if (otherComplaint.checked) {
      complaintDescription.style.borderColor =
        result["complaint-description"] ? 'green' : 'red';
    } else {
      complaintDescription.style.borderColor = '';
    }

  });

});




complaintDescription.addEventListener('change', () => {

  if (otherComplaint.checked) {

    complaintDescription.style.borderColor =
      validateForm()["complaint-description"]
        ? 'green'
        : 'red';

  }

});




const solutionRadios =
  solutionsGroup.querySelectorAll('input[type="radio"]');

solutionRadios.forEach(radio => {

  radio.addEventListener('change', () => {

    const result = validateForm();

    solutionsGroup.style.borderColor =
      result["solutions-group"] ? 'green' : 'red';

    if (otherSolution.checked) {
      solutionDescription.style.borderColor =
        result["solution-description"] ? 'green' : 'red';
    } else {
      solutionDescription.style.borderColor = '';
    }

  });

});



solutionDescription.addEventListener('change', () => {

  if (otherSolution.checked) {

    solutionDescription.style.borderColor =
      validateForm()["solution-description"]
        ? 'green'
        : 'red';

  }

});




form.addEventListener('submit', (event) => {

  event.preventDefault();

  const validationResult = validateForm();

  const valid = isValid(validationResult);



  fullName.style.borderColor =
    validationResult["full-name"] ? 'green' : 'red';

  email.style.borderColor =
    validationResult["email"] ? 'green' : 'red';

  orderNo.style.borderColor =
    validationResult["order-no"] ? 'green' : 'red';

  productCode.style.borderColor =
    validationResult["product-code"] ? 'green' : 'red';

  quantity.style.borderColor =
    validationResult["quantity"] ? 'green' : 'red';

  complaintsGroup.style.borderColor =
    validationResult["complaints-group"] ? 'green' : 'red';

  if (otherComplaint.checked) {
    complaintDescription.style.borderColor =
      validationResult["complaint-description"] ? 'green' : 'red';
  }

  solutionsGroup.style.borderColor =
    validationResult["solutions-group"] ? 'green' : 'red';

  if (otherSolution.checked) {
    solutionDescription.style.borderColor =
      validationResult["solution-description"] ? 'green' : 'red';
  }

  console.log(valid ? "Form is valid" : "Form is invalid");
});