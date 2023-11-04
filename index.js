let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleLightMode function
const toggleLightMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("light-mode");
};

themeButton.addEventListener("click", toggleLightMode);

const sign_now = document.querySelector(".signatures");
const input_name = document.querySelector("#name");
const input_hometown = document.querySelector("#hometown");
const input_email = document.querySelector("#email");
const signNowButton = document.querySelector("#sign-now-button");

// Add your query for the sign now button here

const addSignature = () => {
  // Write your code to manipulate the DOM here
  let name_value = input_name.value;
  console.log(name_value);
  let hometown_value = input_hometown.value;
  console.log(hometown_value);
  let email_value = input_email.value;
  console.log(email_value);

  let txt = document.createElement("p");
  txt.innerText =
    "🖊️ " + name_value + " from " + hometown_value + " supports this.";
  sign_now.appendChild(txt);
};

// Add a click event listener to the sign now button here
// submit_sign_now_btn.addEventListener("click", addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add("error");
    } else {
      petitionInputs[i].classList.remove("error");
    }
  }
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

  // TODO: Validate the value of each input

  // TODO: Call addSignature() and clear fields if no errors
};

signNowButton.addEventListener("click", validateForm);
