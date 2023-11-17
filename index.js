let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleLightMode function
const toggleLightMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("light-mode");
};

themeButton.addEventListener("click", toggleLightMode);

const sign_now = document.querySelector(".signatures");
// const input_name = document.querySelector("#name");
// const input_hometown = document.querySelector("#hometown");
// const input_email = document.querySelector("#email");
const signNowButton = document.querySelector("#sign-now-button");

// Add your query for the sign now button here

const addSignature = (person) => {
  // Write your code to manipulate the DOM here
  let txt = document.createElement("p");
  txt.innerHTML = `🖊️ ${person.name} from ${person.hometown} supports this.`;
  sign_now.appendChild(txt);
};

// Add a click event listener to the sign now button here
// submit_sign_now_btn.addEventListener("click", addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  console.log(petitionInputs);
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  };
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
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

  // TODO: Validate the value of each input

  // TODO: Call addSignature() and clear fields if no errors
};

signNowButton.addEventListener("click", validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease",
};

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer =
      revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalcontent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalcontent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;
  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);
  let intervalId = setInterval(() => {
    scaleImage();
  }, 500);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
};

let scaleFactor = 1;
let modalImage = document.getElementById("modal-img");
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
};
