const btnEncrypt = document.getElementsByTagName("button");

const inputTextToEncrypt = document.getElementById("encrypt-input-area");
const outputTextToDecrypt = document.getElementById("encrypt-output-area");

const textAreaImg = document.getElementById("textarea-img");
const textToEncrypt = document.getElementsByTagName("textarea");

const arrowIconRight = document.getElementById("right-arrow");
const arrowIconLeft = document.getElementById("left-arrow");

const errorCrypt = document.querySelector(".error-el-1");
const errorDecrypt = document.querySelector(".error-el-2");

/////////////////////////////////////////////////////////////////////////////

//validar

const isValid = function (valueToCheck) {
  const pattern = /^[a-z]+$/g;
  const currentValue = valueToCheck.value;
  const valid = pattern.test(currentValue);

  return valid;
};

//validar palavra já criptografada

const isCrypt = function (valueToCheck) {
  const regex = /enter|imes|ai|ober|ufat/g;
  const result = valueToCheck.value.match(regex);

  return result;
};

/////////////////////////////////////////////////////////////////////////////////

//////eventos de botões

btnEncrypt[0].addEventListener("click", (event) => {
  event.preventDefault();
  const validation = isValid(textToEncrypt[0]);
  const result = isCrypt(textToEncrypt[0]);

  if (validation && !result) {
    textToEncrypt[1].value = encrypt(textToEncrypt[0].value);
    textToEncrypt[0].value = "";
    arrowIconRight.style.opacity = "1";
    textAreaImg.classList.add("img-disable");
    errorCrypt.setAttribute("hidden", "");
  } else {
    errorCrypt.removeAttribute("hidden");
  }
});

btnEncrypt[1].addEventListener("click", (event) => {
  event.preventDefault();
  const validation = isValid(textToEncrypt[1]);
  const result = isCrypt(textToEncrypt[1]);
  if (validation && result) {
    textToEncrypt[0].value = decrypt(textToEncrypt[1].value);
    textToEncrypt[1].value = "";
    arrowIconLeft.style.opacity = "1";
    errorDecrypt.setAttribute("hidden", "");
  } else {
    errorDecrypt.removeAttribute("hidden");
  }
});

//////eventos de input
textToEncrypt[1].addEventListener("input", () => {
  if (textToEncrypt[1].value === "") {
    textAreaImg.classList.remove("img-disable");
    arrowIconRight.style.opacity = "0";
    arrowIconLeft.style.opacity = "0";
    errorDecrypt.setAttribute("hidden", "");
  } else {
    textAreaImg.classList.add("img-disable");
  }
});

textToEncrypt[0].addEventListener("input", () => {
  if (textToEncrypt[0].value === "" || textToEncrypt[0] === true) {
    textToEncrypt[0].value = "";
    textAreaImg.classList.remove("img-disable");
    arrowIconRight.style.opacity = "0";
    arrowIconLeft.style.opacity = "0";
    errorCrypt.removeAttribute("hidden");
    emptyError.removeAttribute("hidden");
  }
});

//criptografar

function encrypt(word) {
  let newWord = word.toLowerCase();

  return newWord
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
}

//descriptografar

function decrypt(word) {
  let newWord = word.toLowerCase();
  return newWord
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

//menu hamburger

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
