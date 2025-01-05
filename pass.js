const passBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symble = "@#$^&*():+-"

const allChars = upperCase + lowerCase + number + symble;



function creatPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symble[Math.floor(Math.random() * symble.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passBox.value = password;
}

function copyPassword() {
  passBox.select();
  document.execCommand("copy");
}
