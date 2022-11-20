/////////Checagem de inputs
const form = document.getElementById("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value;
  const phoneValue = phone.value
  const usernameValue = username.value;
  const addressValue = address.value;
  const cityValue = city.value;
  const countryValue = country.value;
  const postalCodeValue = postalCode.value;

  if (emailValue === "") {
    setErrorFor(email, "The email is obrigatory");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Enter a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "The phone is obrigatory");
  } else {
    setSuccessFor(phone);
  }

  if (usernameValue === "") {
    setErrorFor(username, "The username is obrigatory");
  } else {
    setSuccessFor(username);
  }

  if (addressValue === "") {
    setErrorFor(address, "The address is obrigatory");
  } else {
    setSuccessFor(address);
  }

  if (cityValue === "") {
    setErrorFor(city, "The city is obrigatory");
  } else {
    setSuccessFor(city);
  }

  if (countryValue === "Your country...") {
    setErrorFor(country, "The country is obrigatory");
  } else {
    setSuccessFor(country);
  }

  if (postalCodeValue === "") {
    setErrorFor(postalCode, "The postal code is obrigatory");
  } else {
    setSuccessFor(postalCode);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid && parseFloat(totalPrice.innerText) > 0) {
    swal({
      title: "Great!",
      text: "The products will reach you in a few days!",
      icon: "success",
      button: "Done!",
    });
  }

  if (formIsValid && parseFloat(totalPrice.innerText) <= 0) {
    swal({
      title: "Oh, no!",
      text: "It looks like you didn't choose anything, add some items to the cart!",
      icon: "error",
      button: "Done!",
    });
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionar a mensagem de erro
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "form-control error";

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  //Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

/////////////// Preço total
const totalPrice = document.getElementById('total-price')
const shippingPrice = document.getElementById('shipping-price')

function totalPriceControl() {
  let numTotalPrice = parseFloat(totalPrice.innerText)

  // Definir preço total como soma dos itens
  numTotalPrice = parseFloat(backbagCounter.innerText) * parseFloat(backbagPrice.innerText) + parseFloat(shoesCounter.innerText) * parseFloat(shoesPrice.innerText)
  // Adicionar frete
  numTotalPrice += parseFloat(shippingPrice.innerText)
  // Arredondar para 2 casas decimais
  numTotalPrice = numTotalPrice.toFixed(2)

  // Incluir texto na page
  totalPrice.innerText = numTotalPrice

  // Zerar preço total caso não haja itens
  if (totalPrice.innerText == 19) {
    totalPrice.innerText = '0';
  }
}

/////////////// Contagem de mochilas
const backbagPrice = document.getElementById('backbag-price')
const backbagBtnMinus = document.getElementById('backbag-btn-minus')
const backbagBtnPlus = document.getElementById('backbag-btn-plus')
const backbagCounter = document.getElementById('backbag-counter')

function reduceBackbags() {
  // Reduzir quantidade de mochilas no contador
  if (backbagCounter.innerText == '0') {
    backbagCounter.innerText = "0";
  } else {
    backbagCounter.innerText -= 1;
  }

  totalPriceControl()
}

function addBackbags() {
  let intBackbagCounter = parseInt(backbagCounter.innerText);

  intBackbagCounter += 1
  backbagCounter.innerText = intBackbagCounter;

  totalPriceControl()
}

backbagBtnMinus.addEventListener('click', reduceBackbags)
backbagBtnPlus.addEventListener('click', addBackbags)

////////// Contagem de sapatos
const shoesPrice = document.getElementById('shoes-price')
const shoesBtnMinus = document.getElementById('shoes-btn-minus')
const shoesBtnPlus = document.getElementById('shoes-btn-plus')
const shoesCounter = document.getElementById('shoes-counter')

function reduceShoes() {
  if (shoesCounter.innerText == '0') {
    shoesCounter.innerText = "0";
  } else {
    shoesCounter.innerText -= 1;
  }

  totalPriceControl()
}

function addShoes() {
  let intShoesCounter = parseInt(shoesCounter.innerText);

  intShoesCounter += 1
  shoesCounter.innerText = intShoesCounter;

  totalPriceControl()
}

shoesBtnMinus.addEventListener('click', reduceShoes)
shoesBtnPlus.addEventListener('click', addShoes)