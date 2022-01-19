const textToEncrypt = document.getElementsByTagName("textarea");
const btnEncrypt = document.getElementsByTagName("button");
const textAreaImg = document.getElementById("textarea-img");
const arrowIconRight = document.getElementById("right-arrow");
const arrowIconLeft = document.getElementById("left-arrow");

btnEncrypt[0].addEventListener("click", (event) => {
  event.preventDefault();

  let firstInput = textToEncrypt[0].value.trim();

  if (textToEncrypt[0].value === "") {
    textToEncrypt[0].style.border = "5px solid red";
  } else {
    textToEncrypt[1].value = firstInput;
    textToEncrypt[0].value = " ";
    textAreaImg.classList.add("img-disable");
    arrowIconRight.style.stroke = "#34C06B";
    arrowIconRight.style.transition = "all 0.5s";
    arrowIconRight.style.opacity = "1";
  }
});

btnEncrypt[1].addEventListener("click", (event) => {
  event.preventDefault();

  let secondInput = textToEncrypt[1].value.trim();

  if (textToEncrypt[1].value === "") {
    textToEncrypt[1].style.border = "3px solid red";
  } else {
    textToEncrypt[0].value = secondInput;
    textToEncrypt[1].value = " ";
    arrowIconLeft.style.stroke = "#34C06B";
    arrowIconLeft.style.transition = "all 0.5s";
    arrowIconLeft.style.opacity = "1";
  }
});

////////////////Textarea Events|||||||||||||||||||||||||||

textToEncrypt[1].addEventListener("input", () => {
  if (textToEncrypt[1].value === "") {
    textAreaImg.classList.remove("img-disable");
    arrowIconRight.style.opacity = "0";
    arrowIconLeft.style.opacity = "0";
  } else {
    textAreaImg.classList.add("img-disable");
  }
});

textToEncrypt[0].addEventListener("input", () => {
  if (textToEncrypt[0].value === "" || textToEncrypt[0] === true) {
    textAreaImg.classList.remove("img-disable");
    arrowIconRight.style.opacity = "0";
    arrowIconLeft.style.opacity = "0";
  } else {
    textAreaImg.classList.add("img-disable");
  }
});
