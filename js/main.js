console.log("ha");
const passowrdBOX = document.getElementById("passowrd");
const myBtn = document.getElementById("btn");
const iconCopy = document.querySelector(".fa-solid");
//  Length Number
const length = 12;
//  uppercase Große  Buchstaben
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  uppercase kleine  Buchstaben
const lowercase = "abcdefghiklmnopqrstuwxyz";
// number cerate
const number = "0123456789";
//  Sympole cerate
const symploy = "!§%&/()=?`*'_-{}[]|/@~+";

const allChars = uppercase + lowercase + number + symploy;

//  function
myBtn.onclick = function ceratePasseord() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symploy[Math.floor(Math.random() * symploy.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passowrdBOX.value = password;
};

iconCopy.onclick = function () {
  passowrdBOX.select();
  document.execCommand("copy");
  if (passowrdBOX.value !== "") {
    passowrdBOX.value = "";
  }
};
