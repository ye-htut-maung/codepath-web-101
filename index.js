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
