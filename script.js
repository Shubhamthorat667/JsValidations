// function validateForm() {
//   var email = document.forms["forms"]["email"].value;
//   var password = document.forms["forms"]["pwd"].value;
//   var alphaText = document.forms["forms"]["user_input"].value;
//   var phoneNumber = document.forms["forms"]["phoneNumber"].value;
//   var gender = document.querySelector('input[name="radio1"]:checked');
//   var birthDate = document.forms["forms"]["datepicker"].value;
//   var url = document.forms["forms"]["url"].value;
//   var currencySymbol = document.forms["forms"]["currencySymbol"].value;
//   var currencyInput = document.forms["forms"]["currencyInput"].value;
//   var textArea = document.forms["forms"]["textArea"].value;
//   var colorInput = document.forms["forms"]["colorInput"].value;

//   // Basic email validation
//   if (!email || email.trim() === "") {
//       alert("Please enter a valid email address");
//       return false;
//   }

//   // Basic password validation
//   if (!password || password.trim() === "") {
//       alert("Please enter a password");
//       return false;
//   }

//   // Basic alphatext validation
//   if (!alphaText || alphaText.trim() === "") {
//       alert("Please enter alpha text");
//       return false;
//   }

//   // Basic phone number validation
//   if (!phoneNumber || phoneNumber.trim() === "") {
//       alert("Please enter a valid phone number");
//       return false;
//   }

//   // Gender validation
//   if (!gender) {
//       alert("Please select a gender");
//       return false;
//   }

//   // Basic birth date validation
//   if (!birthDate || birthDate.trim() === "") {
//       alert("Please enter your birth date");
//       return false;
//   }

//   // Basic URL validation
//   if (!url || url.trim() === "") {
//       alert("Please enter a valid URL");
//       return false;
//   }

//   // Basic currency validation
//   if (!currencyInput || isNaN(currencyInput)) {
//       alert("Please enter a valid amount");
//       return false;
//   }

//   // Basic textarea validation
//   if (!textArea || textArea.trim() === "") {
//       alert("Please enter text in the textarea");
//       return false;
//   }

//   // Basic color validation
//   if (!colorInput || colorInput.trim() === "") {
//       alert("Please enter a valid color");
//       return false;
//   }

//   // If all validations pass, you can submit the form
//   return true;
// }


//password validation
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('pwd');
  const viewBtn = document.getElementById('viewBtn');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    viewBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    viewBtn.textContent = 'View';
  }
}

function updatePasswordSuggestion() {
  const passwordInput = document.getElementById('pwd');
  const suggestionElement = document.getElementById('password-suggestion');

  if (passwordInput.validity.patternMismatch) {
    suggestionElement.textContent = "Suggestions: At least one lowercase, one uppercase, one digit, one special character, and 8-16 characters long.";
    suggestionElement.style.color = 'green';
    return false;
  } else {
    suggestionElement.textContent = "valid Password";
    suggestionElement.style.color = 'green';
    return true;
  }
  
}
function validateForm() {
  // Check if password is entered before submitting
  const passwordInput = document.getElementById('pwd');
  const passwordSuggestion = document.getElementById('password-suggestion');

  if (!passwordInput.value.trim()) {
    // Password not entered, show a message
    passwordSuggestion.textContent = "Enter the password.";
    passwordSuggestion.style.color = 'red';
    return false;
  }

}


//email validation
function validateEmail(){
  const email = document.getElementById("exampleInputEmail");
  const emailValidText = document.getElementById("emailValidText");

  if(!isValidEmail(email.value)){
    emailValidText.innerHTML="Invalid Email";
    emailValidText.style.color='red';
    return false;
  }

  else{
    emailValidText.innerHTML="Valid Email";
    emailValidText.style.color='green';
    return true;
  }
}

function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);

}

// //password vaidation same as email type

// function validatePassword(){
//   const password = document.getElementById("pwd");
//   const passwordValidText = document.getElementById("passwordValidText");

//   if(!isvalidatePassword(password.value)){
//     passwordValidText.innerHTML="Invalid Password (8-16 characters)";
//     passwordValidText.style.color='red';
//     return false;
//   }

//   else{
//     passwordValidText.innerHTML="Valid Email";
//     passwordValidText.style.color='green';
//     return true;
//   }
// }

// function isvalidatePassword(password){
//   const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
//   return emailRegex.test(password);

// }




//alphatext validation
function validateAlphatext() {
  const alphatextInput = document.getElementById('alphatext');
  const alphatextValidText = document.getElementById('alphatextValidatetext');

  // Your validation logic here
  const alphatext = alphatextInput.value;

  if (!/^[a-zA-Z]+$/.test(alphatext)) {
    alphatextValidText.textContent = "Text must contain only alphabetic characters.";
    alphatextValidText.style.color = 'red';
    return false;
  } else {
    alphatextValidText.textContent = ""; // Clear previous error messages
    // Additional validation logic can be added as needed
    return true
  }
}


//phone no validation
function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById('phoneNumber');
  const phoneNumberValidText = document.getElementById('phoneNumberValidatetext');

  // Your validation logic here
  const phoneNumber = phoneNumberInput.value;

  if (!/^\d{10}$/.test(phoneNumber)) {
    phoneNumberValidText.textContent = "Phone number must be exactly 10 digits.";
    phoneNumberValidText.style.color = 'red';
    return false;
  } else {
    phoneNumberValidText.textContent = "valid phone no"; // Clear previous error messages
    // Additional validation logic can be added as needed
    phoneNumberValidText.style.color = 'green';
    return true;
  }
}

function validateNumericInput(input) {
  // Remove non-numeric characters from the input
  input.value = input.value.replace(/\D/g, '');
}

//Gender validation
function validateGender() {
  const maleRadio = document.getElementById('male');
  const femaleRadio = document.getElementById('female');
  const genderValidText = document.getElementById('genderValidatetext');

  // Your validation logic here
  if (!maleRadio.checked && !femaleRadio.checked) {
    genderValidText.textContent = "Please select a gender.";
    genderValidText.style.color = 'red';
    return false;

  } else {
    genderValidText.textContent = "Text Valid"; // Clear previous error messages
    // Additional validation logic can be added as needed
    genderValidText.style.color = 'green';
    return true;

  }
}


//date valdation
function validateBirthdate() {
  const datepickerInput = document.getElementById('datepicker');
  const birthdateValidText = document.getElementById('birthdateValidatetext');

  // Your validation logic here
  const selectedDate = datepickerInput.value;

  if (!selectedDate) {
    birthdateValidText.textContent = "Please select a valid birth date.";
    birthdateValidText.style.color = 'red';
    return false;
  } else {
    birthdateValidText.textContent = ""; // Clear previous error messages
    // Additional validation logic can be added as needed
    return true;
  }
}

//URL Validation
function validateURL() {
  const urlInput = document.getElementById('url');
  const urlValidText = document.getElementById('urlValidatetext');

  // Your validation logic here
  const enteredURL = urlInput.value;

  if (!isValidURL(enteredURL)) {
    urlValidText.textContent = "Please enter a valid URL.";
    urlValidText.style.color = 'red';
    return false;
  } else {
    urlValidText.textContent = ""; // Clear previous error messages
    // Additional validation logic can be added as needed
    return true;
  }
}

function isValidURL(url) {
  // A simple check for a valid URL format
  // You may want to use a more robust library for URL validation
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
}


//curreny url
function validateCurrencyField() {
  const currencyInput = document.getElementById('currencyInput');
  const currencyValidText = document.getElementById('currencyValidatetext');

  // Your validation logic here
  const enteredAmount = currencyInput.value;

  if (isNaN(enteredAmount) || enteredAmount <= 0) {
    currencyValidText.textContent = "Please enter a valid positive amount.";
    currencyValidText.style.color = 'red';
    return false;
  } else {
    currencyValidText.textContent = ""; // Clear previous error messages
    // Additional validation logic can be added as needed
    return true;
  }
}

//text validation
function validateTextarea() {
  const textArea = document.getElementById('textArea');
  const textareaValidText = document.getElementById('textareaValidatetext');

  // Your validation logic here
  const enteredText = textArea.value.trim();

  if (enteredText === '') {
    textareaValidText.textContent = "Text area cannot be empty.";
    textareaValidText.style.color = 'red';
    return false;
  } else {
    textareaValidText.textContent = ""; // Clear previous error messages
    // Additional validation logic can be added as needed
    return true
  }
}

//checkbox validation
function validateCheckboxes() {
  const checkbox1 = document.getElementById('vehicle1');
  const checkbox2 = document.getElementById('vehicle2');
  const checkbox3 = document.getElementById('vehicle3');
  const checkbox4 = document.getElementById('vehicle4');
  const checkboxValidText = document.getElementById('checkboxValidatetext');

  // Your validation logic here
  if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked) {
    checkboxValidText.textContent = "Please select at least one checkbox.";
    checkboxValidText.style.color = 'red';
    return false;
  } else {
    checkboxValidText.textContent = ""; // Clear previous error messages
    // Additional validation logic can be added as needed
    return true;
  }
}

//image upload
function previewImage() {
  const input = document.getElementById('imageInput');
  const preview = document.getElementById('imagePreview');

  // Check if a file is selected
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Display the selected image in the preview
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '100px';
      img.style.maxHeight = '100px';
      preview.innerHTML = ''; // Clear previous preview
      preview.appendChild(img);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.innerHTML = ''; // Clear the preview if no file is selected
  }
}

function uploadImage() {
  // Add your logic to upload the image
  const input = document.getElementById('imageInput');
  const imagePreview = document.getElementById('imagePreview'); 

  if (input.files && input.files[0]) {
    alert('Image uploaded successfully!');
    // You can perform further actions such as sending the image to a server.
  } else {
    console.log('Please select an image before uploading.');
    imagePreview.textContent='Please upload the image';
    imagePreview.style.color = 'red';

    
  }
}


function submit() {
  validateAlphatext()
  validateEmail()
  updatePasswordSuggestion()
  validateForm();
  validatePhoneNumber()
  uploadImage()
  validateCheckboxes()
  validateTextarea()
  validateCurrencyField()
  validateGender()
  validateBirthdate()
  validateURL()

  if(validateAlphatext() && validateEmail() ) {
    window.alert("Form submitted");
  }
  else{
  window.alert("please fill the form ");
  }


}