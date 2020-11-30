//Assignment Code

var generateBtn = document.querySelector("#generate");
console.log("generate.btn");

//customer code from here
//Generate password function

function generatePassword() {
  // Creating variables for Capital letter, Lower case, Numbers, password length and empty array for userInput.

  var capitalLetter = "ACDEFGHIJKLMNOPARSTUVWXYZ".split("");
  var lowercase = "abcdefghijklmnopqurstuvwxyz".split("");
  var specialCharacter = "!@#$%^&*()".split("");
  var numbers = "0123456789".split("");
  var customerPassword = "";
  var userInput = [];

  // Questions asked from customer using prompt and confirm

  var paswdLength = prompt("Choose your password between 6 to 128");

  var paswdCapitalLetter = confirm(
    "You want Capital letters in your password?"
  );

  var paswdLowercase = confirm("You want lowercase letters in your password?");


  var paswdNumbers = confirm("Do you like numbers in your password?");

  var paswdSpecialCharacter = confirm(
    "Do you like Special Characters in your password ?"
  );

  if (paswdCapitalLetter) {
    customerPassword = customerPassword.concat(capitalLetter);
  }

  if (paswdLowercase) {
    customerPassword = customerPassword.concat(lowercase);
  }

  if (paswdNumbers) {
    customerPassword = customerPassword.concat(numbers);
  }


if (paswdSpecialCharacter) {
  customerPassword = customerPassword.concat(specialCharacter);
}

console.log(customerPassword);

for (var i = 0; i < paswdLength; i++) {
  userInput.push(customerPassword[Math.floor(Math.random() * customerPassword.paswdLength)]);

}
return userInput.join("");


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Added Event listener to generate button

generateBtn.addEventListener("click", writePassword);

