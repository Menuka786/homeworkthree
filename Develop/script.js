//Assignment Code

var generateBtn = document.querySelector("#generate");
console.log("generate.btn");

//custome code from here
//Generate password function

function generatePassowrd() {
  // Creating variables for Captila letter, Lower case, Numbers, password length and empty array for userInput.

  var capitalLetter = "ACDEFGHIJKLMNOPARSTUVWXYZ".split("");
  var lowercase = "abcdefghijklmnopqurstuvwxyz".split("");
  var specialCharacter = "!@#$%^&*()".split("");
  var numbers = "0123456789".split("");
  var customerPassword = "";
  var userInput = [];

  // Questions asked from customer using prompt and confirm

  var paswdLength = prompt("Choose your password between 6 to 128");

  var paswdCapitalLetter = confirm(
    "You want captial letters in your password?"
  );

  var paswdLowercase = confirm("You want lowercae letters in your password?");

  var paswdNumbers = confirm("Do you like numbers in your pasowrd?");

  var paswdSpecialCharacter = confirm(
    "Do you like Special Characters in your password ?"
  );

  if (paswdCapitalLetter === true) {
    customerPassword = customerPasswo.concat(capitalLetter);
  }

  if (paswdLowercase === true) {
    customerPassword = customerPassword.concat(lowercase);
  }

  if (paswdNumber === true) {
    customerPassword = customerPassword.concat(numbers);
  }
}

if (paswdSpecialCharacter === true) {
  customerPassword = customerPassword.concat(specialCharacter);
}

console.log(fianlResult);

for (var i = 0; i < paswdLength; i++) {
  userInput.push(customerPassword[Math.floor(Math.random() * customerPassword.paswdLength)]);

}
return userInput.join("");

}

function writePassword() {
  var passowrd = generatePassword();
  var passwordText = dcoument.querySelector("#password");
  passwordText.value = password;
}

//Added Event lisner to genrate button

generateBtn.addEventListener("Click".writePassowrd);
}
