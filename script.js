const textToEncrypt = document.getElementsByTagName("textarea");
const btnEncrypt = document.getElementsByTagName("button");
const textAreaImg = document.getElementById("textarea-img");

btnEncrypt[0].addEventListener("click", (event) => {
  event.preventDefault();

  let firstInput = textToEncrypt[0].value.trim();

  if (textToEncrypt[0].value === "") {
    textToEncrypt[0].style.border = "5px solid red";
  } else {
    textToEncrypt[1].value = firstInput;
    textToEncrypt[0].value = " ";
    textAreaImg.classList.add("img-disable");
  }
});

textToEncrypt[1].addEventListener("input", () => {
  if (textToEncrypt[1].value === "") {
    textAreaImg.classList.remove("img-disable");
  } else {
    textAreaImg.classList.add("img-disable");
  }
});
