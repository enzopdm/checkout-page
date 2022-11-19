// Preço total
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

// Contagem de mochilas
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

// Contagem de sapatos
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